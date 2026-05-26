export default function handler(req, res) {
  return res.status(200).json({
    status: "ok",
    service: "authority-continuity-primitive-public"
  });
}
