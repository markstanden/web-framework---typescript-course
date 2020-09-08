/*
    IMPORTS
*/
import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

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
export class User {
  // Hardcoded eventing class allows use of userInstance.events.trigger(...) etc, but means we
  // cannot swap it out easily.
  public events: Eventing = new Eventing();
  // again hardcoding allows for easy intuitive calling but limits the reuse of the code as
  // sync function is hardcoded into the class.
  public sync: Sync<UserProps> = new Sync<UserProps>(ENV_BASE_URL);
  // hardcoding of the attributes class.
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    // Returns a reference to the events.on() function.
    // Note: we are not calling it at this point, just returning the reference.
    // This means that any changes within Eventing.ts will not require changes to our passthrough code
    // if we wrote this as on(event, callback) {this.events.on(event, callback)} changes to Eventing.ts
    // may need to be changed here too.
    return this.events.on;
  }

  get trigger() {
    //as get on() we're just passing a reference here
    return this.events.trigger;
  }

  get get() {
    //as get on() we're just passing a reference here
    return this.attributes.get;
  }
}
