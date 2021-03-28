import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: 'false',
};

const getMovies = async ({ query, page }) => {
  try {
    const { data } = await axios.get('/search/movie', {
      params: { query, page },
    });
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getMovies;

// https://api.themoviedb.org/3/search/movie?query=<<query>>&api_key=<<api_key>>&language=en-US&page=1
