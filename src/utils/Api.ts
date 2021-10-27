import axios from "axios";

// const BASE_URL = process.env.API_BASE_URL;
const BASE_URL = "https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io"; // TODO: update to env var

export default class Api {
  async _get(path: string) {
    const url = BASE_URL + path;
    const res = await axios.get(url);
    return res.data;
  }

  _post() {}
  _patch() {}
  _delete() {}

  getContestants() {
    return this._get("/contestants");
    // get /contestants
  }
}
