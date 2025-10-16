/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @name GET/
    * @function
    * @memberof module:routes/api/comments
    * @returns {Object[]} 200 - Array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */

 /**
    * POST /
    * Creates a new comment.
    * 
    * @name POST/
    * @function
    * @memberof module:routes/api/comments
    * @param {string} req.body.text - The text of the comment
    * @param {string} req.body.author - The author of the comment
    * @returns {Object} 201 - The created comment object
    * @returns {Object} 500 - Error message if creation fails
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * 
    * @name DELETE/:id
    * @function
    * @memberof module:routes/api/comments
    * @param {string} req.params.id - The ID of the comment to delete
    * @returns {void} 204 - No content on successful deletion
    * @returns {Object} 500 - Error message if deletion fails
    */

 /**
    * DELETE /
    * Deletes a comment by its ID provided in the request body.
    * 
    * @name DELETE/
    * @function
    * @memberof module:routes/api/comments
    * @param {string} req.body.id - The ID of the comment to delete
    * @returns {void} 204 - No content on successful deletion
    * @returns {Object} 500 - Error message if deletion fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot,
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { text, author } = req.body;
    const newComment = new Comment({ text, author });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create comment" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});
// add another endpoint for deleting a comment
router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

