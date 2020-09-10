export class Attributes<T> {
  constructor(public data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    //console.log(`Before Set: ${this.data['name']}`);
    Object.assign(this.data, update);
    //console.log(`After Set: ${this.data['name']}`);
  };

  getAll(): T {
    return this.data;
  }
}
