import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getGenres = async () => {
  try {
    const { data } = await axios.get('/genre/movie/list');
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getGenres;

// https://api.themoviedb.org/3/genre/movie/list?api_key=ffddee44025dd24685ea61d637d56d24&language=en-US
