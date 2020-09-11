import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Billy', age: 20, id: 10 });
const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
