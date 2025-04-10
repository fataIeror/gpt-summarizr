const express = require("express");
const openai = require("../openaiConfig");

const router = express.Router();

router.post("/summarize", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that summarizes text." },
        { role: "user", content: `Please summarize the following:\n\n${text}` },
      ],
      max_tokens: 500,
    });

    const summary = response.data.choices[0].message.content.trim();
    res.json({ summary });
  } catch (error) {
    console.error("OpenAI error:", error.message);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

module.exports = router;
