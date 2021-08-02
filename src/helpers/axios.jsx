import axios from 'axios';
import Cookies from 'js-cookie';

let token = Cookies.get('token')
const defaultOptDev = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
      headerType: 'JSON',
      'Authorization': `Bearer ${token}`
  }
};

let Axios = axios.create(defaultOptDev);
 
export default Axios;