import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getMovieDetails = async id => {
  try {
    const { data } = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getMovieDetails;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
