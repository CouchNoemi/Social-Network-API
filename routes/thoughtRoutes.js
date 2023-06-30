const router = require("express").Router();

// base route = /api/thoughts

router.get("/", (req, res) => {
  res.json({ message: "getting thoughts now" });
});

module.exports = router;
