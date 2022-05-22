import getCookie from './Utils'
import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.common['Authorization'] = "Bearer " + getCookie("jwt-token");

export default instance;