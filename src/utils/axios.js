import Vue from 'vue';
import axios from 'axios';
import { BASE_EXCHANGE, BASE_TIMEOUT, EXCHANGES } from '../constants/api';

// set up axios
Vue.prototype.$http = axios;

const HEADER_NAME = EXCHANGES[BASE_EXCHANGE].API_KEY_NAME;
const HEADER_VALUE = EXCHANGES[BASE_EXCHANGE].API_KEY;
// create axios instance
export const instance = axios.create({
    baseURL: EXCHANGES[BASE_EXCHANGE].BASE_API,
    timeout: BASE_TIMEOUT,
    //headers: EXCHANGES[BASE_EXCHANGE].HEADERS
});