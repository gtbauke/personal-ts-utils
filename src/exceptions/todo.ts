export class Todo extends Error {
  public constructor(message?: string) {
    super(message ?? "TODO: implement this function");
  }
}
