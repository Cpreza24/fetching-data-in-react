const API_KEY = '8cff2941368249fe96922000251402';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log('Data from weatherService.js:', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { show };
