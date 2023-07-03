import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5b8e4a72bf8545a8a857c67ce65421c1',
  },
});
