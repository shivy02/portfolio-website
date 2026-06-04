import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// Full repo path "owner/name". Defaults to this portfolio's repo.
const GITHUB_REPO = process.env.GITHUB_REPO ?? 'shivy02/portfolio-website';

interface RepoResponse {
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
    };

    // A token is optional for public repos, but using it avoids the low
    // unauthenticated rate limit (60 req/hr).
    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data: RepoResponse = await response.json();

    return NextResponse.json({
      stars: data.stargazers_count,
      forks: data.forks_count,
      url: data.html_url,
      repo: GITHUB_REPO,
    });
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub stars' },
      { status: 500 },
    );
  }
}
