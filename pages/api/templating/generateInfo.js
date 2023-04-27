const { Configuration, OpenAIApi } = require("openai");
import store from "store2";

export const celebrities = async (year) => {
  let api_key = store.get("api_key");

  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

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
    temperature: 0,
  });
  let data = completion.data.choices[0].message.content;

  return data.split(", ");
};

export const movies = async (year) => {
  let api_key = store.get("api_key");

  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

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
    temperature: 0,
  });
  let data = completion.data.choices[0].message.content;

  return data.split(", ");
};

export const monarchs = async (year) => {
  let api_key = store.get("api_key");

  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

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
    temperature: 0,
  });
  let data = completion.data.choices[0].message.content;
  return data.slice(0, -1); // remove the period at the end of the string
};

export const books = async (year) => {
  let api_key = store.get("api_key");

  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

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
          "Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma, not in a numbered list.",
      },
      { role: "user", content: question },
    ],
    temperature: 0,
  });
  let data = completion.data.choices[0].message.content;
  let bookdata1 = data.replace(/['"]+/g, "")
  console.log(bookdata1)
  let bookdata2 = bookdata1.split(", ");
  console.log(bookdata2)
  console.log(bookdata2.array.sort((a, b) => a.length - b.length))
  return bookdata2.array.sort((a, b) => a.length - b.length);
};

export const worldPopulation = async (year) => {
  let api_key = store.get("api_key");

  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

  const question =
    "What was the world population in " +
    year +
    ". Give a single number, such as '7 billion'.";
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
    temperature: 0,
  });
  let data = completion.data.choices[0].message.content;

  return data.slice(0, -1); // remove the period at the end of the string
};

export const UKPopulation = async (year) => {
  let api_key = store.get("api_key");

  const configuration = new Configuration({
    apiKey: api_key,
  });
  const openai = new OpenAIApi(configuration);

  const question =
    "What was the UK's population in " +
    year +
    ". Give a single number, such as '7 billion'.";
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
    temperature: 0,
  });
  let data = completion.data.choices[0].message.content;

  return data.slice(0, -1); // remove the period at the end of the string
};
