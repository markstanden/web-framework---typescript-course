import axios, { AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootURL: string) {}

  fetch(id: number): AxiosPromise {
    // get the json object (response.data) from the JSON server,
    // and pass back the promise to the calling class
    // in our case User can use the User.set() function to assign the
    // server values to the class instance that called it.
    return axios.get(`${this.rootURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    // destructuring... const id = data.id;
    const { id } = data;

    if (id) {
      //put request, as user has an id, it must be already on the server.
      return axios.put(`${this.rootURL}/${id}`, data);
    } else {
      //post request, to create a new user entry with the information currently in the user instance.
      return axios.post(`${this.rootURL}`, data);
    }
  }
}
