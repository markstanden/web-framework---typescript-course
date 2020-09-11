/*
    IMPORTS
*/
import { Model } from './Model';
import { Collection } from './Collection';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

/*
    INTERFACES
*/
export interface UserProps {
  age?: number;
  id?: number;
  name?: string;
}

/*
    IMPORTS
*/
// Base url of the JSON server and the users key created in the db.json file.
const ENV_BASE_URL = 'http://localhost:3000/users';

/*
    USER CLASS
*/
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(ENV_BASE_URL)
    );
  }
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(ENV_BASE_URL, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }
}
