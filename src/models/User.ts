/*
    IMPORTS
*/
import { Model } from './Model';
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
  static buildBuild(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(ENV_BASE_URL)
    );
  }
}
