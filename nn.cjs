const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function gett(){
const  response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "CV template for mail",
  temperature: 1,
  max_tokens: 50,
});
console.log(response.data.choices[0].text)
}

gett()


