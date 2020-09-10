import { Collection } from './models/Collection';
const collection = new Collection('http://localhost:3000/users');
collection.fetch();
console.log(collection.models);

/* import Axios, { AxiosResponse } from 'axios';
Axios.get('http://localhost:3000/users').then((response: AxiosResponse) => {
  console.log(response.data);
}); */

// import { User } from './models/User';

// const user = User.buildUser({
//   id: 1,
//   name: 'test',
// });

// user.on('save', () => {
//   console.log('After Save :', user.getAll);
// });

// user.on('fetch', () => {
//   setTimeout(() => {
//     user.isAdminUser ? console.log('Site Admin') : console.log('Basic User');
//     console.log(`Initial Load: ${user.get('name')}`);
//     console.log('After Load :', user.getAll);
//     user.set({ age: 25 });

//     console.log('After Edit :', user.getAll);
//     user.save();
//   }, 2000);
// });

// user.fetch();
