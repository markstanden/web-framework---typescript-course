import { User } from './models/User';

const user = new User({ name: 'Fred', age: 18 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ age: 69 });

console.log(user.get('name'));
console.log(user.get('age'));
