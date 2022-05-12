import { APP_CONFIG } from '@core/config/app.config';
import axios from 'axios';

const ApiClient = axios.create({
  baseURL: APP_CONFIG.FOOTBALL_API_URL,
  timeout: 5000,
});

ApiClient.interceptors.request.use((config) => {
  config.headers = {
    'X-Auth-Token': APP_CONFIG.FOOTBALL_API_KEY,
  };

  return config;
});
export default ApiClient;
