// global.d.ts
interface GlobalThis {
    mongoose: {
      conn: any;
      promise: any;
    };
  }
  
  declare var globalThis: GlobalThis;