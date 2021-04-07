import axios from 'axios';

const defaultOptDev = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    //   "access-control-allow-origin" : "*",
      headerType: 'JSON'
  }
};

let Axios = axios.create(defaultOptDev);
 
export default Axios;