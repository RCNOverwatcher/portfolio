const { Configuration, OpenAIApi } = require("openai");
import store from "store2"

let api_key = store.get("api_key")

const configuration = new Configuration({
  apiKey: api_key,
});
const openai = new OpenAIApi(configuration);

export const celebrities = async (year) => {
  const question = "Give me 6 people who were born in " + year + ".";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.",
      },
      { role: "user", content: question },
    ],
    temperature: 1,
  });
  let data = completion.data.choices[0].message.content;

  return data.split(", ");
};

export const movies = async (year) => {
  const question = "Give me 6 movies that were released in " + year + ".";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.",
      },
      { role: "user", content: question },
    ],
    temperature: 1,
  });
  let data = completion.data.choices[0].message.content;

  return data.split(", ");
};

export const monarchs = async (year) => {
  const question = "Give me the monarch reigning in " + year + ".";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.",
      },
      { role: "user", content: question },
    ],
    temperature: 1,
  });
  let string = completion.data.choices[0].message.content;
  string.slice(0, string.length - 1);
  return string.slice(0, string.length - 1);
};

export const books = async (year) => {
  const question =
    "Give me the titles of 6 books that were published in " +
    year +
    ". Do not include the author names";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.",
      },
      { role: "user", content: question },
    ],
    temperature: 1,
  });
  let data = completion.data.choices[0].message.content;
  console.log(data);

  return data.split(", ");
};
