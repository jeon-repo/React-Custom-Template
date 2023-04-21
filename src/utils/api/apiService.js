/* eslint-disable class-methods-use-this */
import axios from 'axios';
import Utils from 'utils/common/utils';

class ApiService extends Utils.EventEmitter {
  init() {
    this.setInterceptors();
  }

  setInterceptors() {
    axios.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err === 'success') {
          return Promise.resolve(1);
        }
        return Promise.reject(err);
      },
    );
  }
}

const instance = new ApiService();

export default instance;
