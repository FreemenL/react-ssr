  declare module '*.svg'
  declare module '*.png'
  declare module '*.jpg'
  declare module '@loadable/component'

  declare let __webpack_modules__: any;
  declare let __webpack_require__: any;

  declare module "*.css" {
    const content: {
      [propName: string]: any
    };
    export default content;
  }

  declare module "*.scss" {
    const content: any;
    export default content;
  }
  
  declare module "*.less" {
    const content: any;
    export default content;
  }
  
  declare module "*.json" {
    const content: object;
    export default content;
  }
  