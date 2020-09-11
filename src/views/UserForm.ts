export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log('Button Clicked');
  }

  template(): string {
    return `
    <div>
      <h2>User Form</h2>
      <input placeholder="Enter Name"/>
      <button>Click Me</button>
    </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
