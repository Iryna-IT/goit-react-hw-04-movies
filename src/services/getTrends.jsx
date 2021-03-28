import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: 'false',
};

const getTrends = async page => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: { page },
    });
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getTrends;

//     `http://api.themoviedb.org/3/trending/movie/day?api_key=ffddee44025dd24685ea61d637d56d24&language=en-US&include_adult=false&page=1`,
