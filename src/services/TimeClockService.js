import axios from "axios";

const url = "http://localhost:5000/api/employees/";

class TimeClockService {
  static getRoster() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(console.log(data));
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default TimeClockService;
