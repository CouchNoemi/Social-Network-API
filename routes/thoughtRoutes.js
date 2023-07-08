const {
  getAllThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../controllers/thoughtController");

const router = require("express").Router();

// base route = /api/thoughts

// get all thoughs
router.get("/", getAllThoughts);

// get thought by id
router.get("/:id", getThought);

// create a thought
router.post("/", createThought);

// update thought by id
router.put("/:id", updateThought);

// delete thought by id
router.delete("/:id", deleteThought);

module.exports = router;
