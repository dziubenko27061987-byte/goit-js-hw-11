import axios from 'axios';

const API_KEY = '58548400-5aaa26a2e6e3814b8c4a13947'; 
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data; 
}