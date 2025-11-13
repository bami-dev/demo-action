export default async function handler(req, res) {
  try {
    const r = await fetch("https://nghttp2.org/httpbin/cache");
    const txt = await r.text();
    res.status(200).send(txt);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}
