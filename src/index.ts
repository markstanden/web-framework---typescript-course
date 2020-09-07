import { User } from './models/User';

const user = new User({
  name: 'new record',
  age: 0,
});

user.events.on('change', () => {
  console.log('changed');
});

setTimeout(() => {
  user.events.trigger('change');
}, 5000);
