export default function handler(req, res) {
  return res.status(200).json({
    decision: "ALLOW",
    authority_continuity: "VALID",
    runtime_status: "RECOMPUTED"
  });
}
