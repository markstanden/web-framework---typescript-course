import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Billy', age: 20, id: 10 });
const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
