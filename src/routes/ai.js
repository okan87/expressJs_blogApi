const express = require('express');
const router = express.Router();
const { OpenAI } = require("openai");
const { BlogPost } = require('../model/blogModel');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await BlogPost.find({}, { _id: 1, title: 1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/blogs/:id/summarize', async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (!blog.content) {
      return res.status(400).json({ message: "Blog does not have content to summarize." });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that summarizes blog posts." },
        { role: "user", content: `Lütfen aşağıdaki blog yazısını özetle:\n\n${blog.content}` }
      ],
      max_tokens: 100,
    });

    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;