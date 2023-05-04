export default function catchErrors(
  monarch,
  movieList,
  celebrities,
  bookList,
  worldPop,
  UKPop,
) {
  if (monarch == undefined) {
    throw new Error('Monarch API call failed. Check your API key.');
  }
  for (let i = 0; i < 5; i++) {
    if (movieList[i] == undefined) {
      throw new Error('Movie API call failed. Check your API key.');
    }
  }
  for (let i = 0; i < 5; i++) {
    if (celebrities[i] == undefined) {
      throw new Error('Celebrity API call failed. Check your API key.');
    }
  }
  for (let i = 0; i < 5; i++) {
    if (bookList[i] == undefined) {
      throw new Error('Book API call failed. Check your API key.');
    }
  }
  if (worldPop == undefined) {
    throw new Error('World Population API call failed. Check your API key.');
  }
  if (UKPop == undefined) {
    throw new Error('UK Population API call failed. Check your API key.');
  }
}
