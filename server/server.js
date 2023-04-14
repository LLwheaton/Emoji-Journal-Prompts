const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);


const message = "Hello from server :)";

app.get("/message", async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-001",
        prompt: "Give me a journal prompt related to the mood: sad",
        max_tokens: 50,
        temperature: 0,
      });
    // Displays the text response from above model and prompt
    console.log(response.data.choices[0].text);
    res.json({message: message});
});

app.listen(9000, () => {
    console.log("Server is running");
});