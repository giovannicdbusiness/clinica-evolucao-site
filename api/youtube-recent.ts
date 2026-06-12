export const config = { runtime: 'edge' };

const CHANNEL_ID = 'UCP_4Jd6RjMqU9EIEN8QUFrw';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

interface VideoEntry {
  id: string;
  title: string;
  thumb: string;
  published: string;
  url: string;
}

export default async function handler(): Promise<Response> {
  try {
    const response = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ClinicaEvolucaoBot/1.0)' },
    });
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch feed' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const xml = await response.text();

    const entries = Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)).slice(0, 6);
    const videos: VideoEntry[] = entries.map(([, body]) => {
      const id = body.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '';
      const titleRaw = body.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
      const thumb = body.match(/<media:thumbnail url="([^"]+)"/)?.[1] ?? '';
      const published = body.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
      return {
        id,
        title: titleRaw.trim(),
        thumb,
        published,
        url: `https://www.youtube.com/watch?v=${id}`,
      };
    }).filter((v) => v.id);

    return new Response(JSON.stringify({ videos }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
