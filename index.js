require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function handleAsk() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "me liste 10 melhores animes",
    max_tokens: 2048,
  });
  console.log(response.data.choices[0].text.trim());
}

handleAsk()
