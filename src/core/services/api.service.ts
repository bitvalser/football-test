import axios from 'axios';
import Config from 'react-native-config';

const ApiClient = axios.create({
  baseURL: Config.FOOTBALL_API_URL,
  timeout: 5000,
});

export default ApiClient;
