import { User } from './models/User';

const user = new User({
  id: 1,
  name: 'Sammy the Snake',
  age: 20,
});

user.on('saved', () => {
  console.log(user);
});

user.save();

// a quick reminder on accessors
// using the get accessor command allows us to call the function without brackets, which makes it look much
// more like we are accessing a property of the Person class, rather than calling a function.
/* 

class Person {
  constructor(public firstName: string, public lastName: string) {}
  get getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Marcus', 'of Invictus');
console.log(person.getName);
 */
