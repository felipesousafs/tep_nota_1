export class Todo {
  id: number;
  title: string;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
