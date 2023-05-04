const { Configuration, OpenAIApi } = require('openai');
import store from 'store2';

export const celebrityList = async (year: number, model: string) => {
  try {
    document.getElementById('log').innerHTML = 'Generating celebrities...';
    let api_key: string = store.get('api_key');

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);

    const question: string = 'Give me 6 people who were born in ' + year + '.';
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            'Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.',
        },
        { role: 'user', content: question },
      ],
      temperature: 0,
    });
    let data: string = completion.data.choices[0].message.content;

    return data.split(', ');
  } catch (e) {
    document.getElementById('log').innerHTML = 'Error generating celebrities';
    console.log(e);
  }
};

export const movies = async (year: number, model: string) => {
  try {
    document.getElementById('log').innerHTML = 'Generating movies...';
    let api_key: string = store.get('api_key');

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);

    const question = 'Give me 6 movies that were released in ' + year + '.';
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            'Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.',
        },
        { role: 'user', content: question },
      ],
      temperature: 0,
    });
    let data: string = completion.data.choices[0].message.content;

    return data.split(', ');
  } catch (e) {
    document.getElementById('log').innerHTML = 'Error generating movies';
    console.log(e);
  }
};

export const monarchs = async (year: number, model: string) => {
  try {
    document.getElementById('log').innerHTML = 'Generating monarchs...';
    let api_key: string = store.get('api_key');

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);

    const question = 'Give me the monarch reigning in ' + year + '.';
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            'Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.',
        },
        { role: 'user', content: question },
      ],
      temperature: 0,
    });
    let data: string = completion.data.choices[0].message.content;
    if (data.slice(-1) == '.') {
      return data.slice(0, -1); // remove the period at the end of the string
    } else {
      return data;
    }
  } catch (e) {
    document.getElementById('log').innerHTML = 'Error generating monarchs';
    console.log(e);
  }
};

export const books = async (year, model) => {
  try {
    document.getElementById('log').innerHTML = 'Generating books...';
    let api_key: string = store.get('api_key');

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);
    const question =
      'Give me the titles of 6 books that were published in ' +
      year +
      '. Do not include the author names';
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            'Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma, not in a numbered list.',
        },
        { role: 'user', content: question },
      ],
      temperature: 0,
    });
    let data: string = completion.data.choices[0].message.content;
    let bookdata1 = data.replace(/['"]+/g, '');
    return bookdata1.split(', ');
  } catch (e) {
    document.getElementById('log').innerHTML = 'Error generating books';
    console.log(e);
  }
};

export const worldPopulation = async (year, model) => {
  try {
    document.getElementById('log').innerHTML = 'Generating world population...';
    let api_key: string = store.get('api_key');

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);

    const question =
      'What was the world population in ' +
      year +
      ". Give a single number, such as '7 billion'.";
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            'Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.',
        },
        { role: 'user', content: question },
      ],
      temperature: 0,
    });
    let data: string = completion.data.choices[0].message.content;

    if (data.slice(-1) == '.') {
      return data.slice(0, -1);
    } else {
      return data; // remove the period at the end of the string
    }
  } catch (e) {
    document.getElementById('log').innerHTML =
      'Error generating world population';
    console.log(e);
  }
};

export const UKPopulation = async (year, model) => {
  try {
    document.getElementById('log').innerHTML = 'Generating UK population...';
    let api_key: string = store.get('api_key');

    const configuration = new Configuration({
      apiKey: api_key,
    });
    const openai = new OpenAIApi(configuration);
    const question =
      "What was the UK's population in " +
      year +
      ". Give a single number, such as '7 billion'.";
    const completion = await openai.createChatCompletion({
      model: model,
      messages: [
        {
          role: 'system',
          content:
            'Act like an API. Only provide the required answer. Do not produce any additional dialogue. If responding with a list of values, give each value seperated by a comma.',
        },
        { role: 'user', content: question },
      ],
      temperature: 0,
    });
    let data: string = completion.data.choices[0].message.content;

    if (data.slice(-1) == '.') {
      return data.slice(0, -1); // remove the period at the end of the string
    } else {
      return data;
    }
  } catch (e) {
    document.getElementById('log').innerHTML = 'Error generating UK population';
    console.log(e);
  }
};
