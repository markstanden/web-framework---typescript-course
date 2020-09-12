import { User } from '../models/User';
import { View } from './view';

export class UserForm extends View<User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.button_update_name': this.onButtonUpdateName,
      'click:.button_random-age': this.onButtonRandomAge,
      'mouseover:.title_main': this.onHoverTitle,
    };
  }

  onButtonUpdateName = (): void => {
    const inputValue: HTMLInputElement | null = this.parent.querySelector(
      '.input_change_name'
    );

    if (inputValue) {
      this.model.set({ name: inputValue.value });
    }
  };

  onButtonRandomAge = (): void => {
    console.log('Random Age Button Clicked');
    this.model.setRandomAge();
  };

  onHoverTitle = (): void => {
    console.log('Title Hovered');
  };

  template(): string {
    return ` 
    <div>
      <h2 class="title_main">User Form</h2>
      <hr><br>
      <div class="user_id">User ID: <strong>${this.model.get(
        'id'
      )}</strong></div>
      <div class="user_name">User Name: <strong>${this.model.get(
        'name'
      )}</strong></div>
      <div class="user_age">User Age:  <strong>${this.model.get(
        'age'
      )}</strong></div>
      <br><hr><br>
      <input class="input_change_name" placeholder="Enter new name here..."/>
      <button class="button_update_name">Update Name</button>
      <button class="button_random-age">Set Random Age</button>
      <br><br><hr>
    </div>
    `;
  }
}
