import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': '42b75db261msh84c31e6ea9c7c43p1a3fa7jsn08ef7ea935d4',
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

 const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}

export default fetchFromAPI;
