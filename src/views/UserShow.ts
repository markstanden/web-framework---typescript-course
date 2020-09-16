import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1 class="title_user-data">User Data</h1>
      <div>ID: ${this.model.get('id')} </div>
      <div class="data_name">User Name: ${this.model.get('name')}</div>
      <div class="data_age">User Age:  ${this.model.get('age')}</div>
    </div>  
    `;
  }
}
