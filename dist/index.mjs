// src/error.ts
var MyError = class extends Error {
  constructor(error) {
    super(error.message);
    this.message = error.message;
    this.code = error.code;
  }
};
export {
  MyError
};
