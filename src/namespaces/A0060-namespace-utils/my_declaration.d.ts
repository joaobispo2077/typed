declare namespace _ {
  declare interface LoDashStatic {
    multiply: (array: number[]) => number;
  }
}

declare namespace NodeJS {
  interface Global {
    myGlobal: string;
  }
}
