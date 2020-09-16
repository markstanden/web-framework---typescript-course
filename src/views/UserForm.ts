import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.button_update_name': this.onButtonUpdateName,
      'click:.button_random-age': this.onButtonRandomAge,
      'click:.button_save-model': this.onButtonSaveModel,
    };
  }

  onButtonSaveModel = (): void => {
    this.model.save();
  };

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

  template(): string {
    return ` 
    <div>
     
      <br><hr><br>
      <input class="input_change_name" placeholder="${this.model.get(
        'name'
      )}" />
      <br><br>
      <button class="button_update_name">Update Name</button>
      <button class="button_random-age">Set Random Age</button>
      <button class="button_save-model">Save User</button>
      <br><br><hr>
    </div>
    `;
  }
}
