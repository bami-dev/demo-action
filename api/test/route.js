export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  try {
    const r = await fetch("https://nghttp2.org/httpbin/cache");
    const txt = await r.text();

    return new Response(txt, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.toString() }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
