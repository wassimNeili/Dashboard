import axios from 'axios';

class AxiosService {
  constructor() {
    this.axiosInstance = axios.create({baseURL: 'http://197.14.56.60:8445'});
  }
  get(url,  headers ) {
    return this.axiosInstance.get(url,headers);
  }

  create(url, data,headers) {
    return this.axiosInstance.post(url, data,headers);
  }

  update(url, data) {
    const jwtToken = localStorage.getItem('jwtToken');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    };

    return this.axiosInstance.put(url, data, { headers });
  }

  delete(url) {
    return this.axiosInstance.delete(url);
  }
}

export default AxiosService;
