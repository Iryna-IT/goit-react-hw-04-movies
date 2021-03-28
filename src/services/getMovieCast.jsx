import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getMovieCast = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getMovieCast;

// https://api.themoviedb.org/3/movie/{movie_id}//credits?api_key=<<api_key>>&language=en-US
