export class MyError extends Error {
  code: number;

  constructor(error: {
    code: number;
    message: string;
  }) {
    super(error.message);
    this.message = error.message;
    this.code = error.code;
  }
}
