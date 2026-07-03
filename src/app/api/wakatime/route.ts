import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'WakaTime API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      'https://wakatime.com/api/v1/users/current/all_time_since_today',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`,
        },
        signal: AbortSignal.timeout(6000), // Fail fast instead of hanging the function
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch WakaTime data', totalHours: 0 },
        { status: response.status }
      );
    }

    const data = await response.json();
    const totalSeconds = data.data.total_seconds || 0;
    const totalHours = Math.floor(totalSeconds / 3600);

    return NextResponse.json({
      totalHours,
      totalSeconds,
      text: data.data.text,
    });
  } catch (error) {
    console.error('Error fetching WakaTime data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch WakaTime data', totalHours: 0 },
      { status: 500 }
    );
  }
}
