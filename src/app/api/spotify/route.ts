import { NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

// Abandon a hung upstream call rather than letting the function sit until the
// platform's (now 300s) timeout — a fast failure degrades far more gracefully.
const FETCH_TIMEOUT_MS = 6000;

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  return response.json();
}

async function getRecentlyPlayed() {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
}

export async function GET() {
  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json(
      { error: 'Spotify credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await getRecentlyPlayed();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch Spotify data' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const track = data.items[0]?.track;

    if (!track) {
      return NextResponse.json(
        { error: 'No recently played tracks found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      title: track.name,
      artist: track.artists.map((artist: { name: string }) => artist.name).join(', '),
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    );
  }
}
