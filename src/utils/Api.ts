import axios from "axios";

// const BASE_URL = process.env.API_BASE_URL;
const BASE_URL = "https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io"; // TODO: update to env var

export default class Api {
  _buildUrl(path: string) {
    return BASE_URL + path;
  }

  async _get(path: string) {
    const url = this._buildUrl(path);
    const res = await axios.get(url);
    return res.data;
  }

  async _patch(path: string) {
    const url = this._buildUrl(path);
    const res = await axios.patch(url);
    return res.data;
  }

  async _post(path: string) {
    const url = this._buildUrl(path);
    const res = await axios.post(url);
    return res.data;
  }

  async _delete(path: string) {
    const url = this._buildUrl(path);
    const res = await axios.delete(url);
    return res.data;
  }

  async getContestants(): Promise<Contestant[]> {
    return this._get("/contestants") as unknown as Promise<Contestant[]>;
  }

  upvote(id: string) {
    return this._patch(`/contestants/${id}/upvote`);
  }
}
