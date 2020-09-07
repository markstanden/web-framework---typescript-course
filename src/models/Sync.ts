import axios, { AxiosResponse } from 'axios';

const ENV_BASE_URL = 'http://localhost:3000';

export class Sync {
  fetch(): void {
    // get the json object (response.data) from the JSOn server,
    // and then user the User.set() function to assign the
    // server values to the class instance that called it.
    axios.get(`${ENV_BASE_URL}/users/${this.get('id')}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      //put request, as user has an id, it must be already on the server.
      axios.put(`${ENV_BASE_URL}/users/${id}`, this.data);
    } else {
      axios.post(`${ENV_BASE_URL}/users`, this.data);
      //post request, to create a new user entry with the information currently in the user instance.
    }
  }
}
