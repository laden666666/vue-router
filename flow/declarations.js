declare var document: Document;

// 定义path-to-regexp模块，应该是path-to-regexp不提供flow的定义文件
declare module 'path-to-regexp' {
  declare var exports: {
    (path: string, keys: Array<?{ name: string }>): RegExp;
    compile: (path: string) => (params: Object) => string;
  }
}

// 
declare type Dictionary<T> = { [key: string]: T }

// 页面跳转的回调函数类型
declare type NavigationGuard = (
  to: Route,
  from: Route,
  next: (to?: RawLocation | false | Function | void) => void
) => any

// 路由的中配置
declare type RouterOptions = {
  // route的配置
  routes?: Array<RouteConfig>;
  // 路由模式：hash、state、内存
  mode?: string;
  // baseURL
  base?: string;
  // ？？？
  linkActiveClass?: string;
  // 将查询字符串转为对象？？？
  parseQuery?: (query: string) => Object;
  // 将对象序列化查询参数？？？
  stringifyQuery?: (query: Object) => string;
  // 滚动行为
  scrollBehavior?: (
    to: Route,
    from: Route,
    savedPosition: ?{ x: number, y: number }
  ) => { x: number, y: number } | { selector: string } | ?{};
}

declare type RedirectOption = RawLocation | ((to: Route) => RawLocation)

declare type RouteConfig = {
  path: string;
  name?: string;
  component?: any;
  components?: 
  
  <any>;
  redirect?: RedirectOption;
  alias?: string | Array<string>;
  children?: Array<RouteConfig>;
  beforeEnter?: NavigationGuard;
  meta?: any;
  props?: boolean | Object | Function;
}

declare type RouteRecord = {
  path: string;
  components: Dictionary<any>;
  instances: Dictionary<any>;
  name: ?string;
  parent: ?RouteRecord;
  redirect: ?RedirectOption;
  matchAs: ?string;
  beforeEnter: ?NavigationGuard;
  meta: any;
  props: boolean | Object | Function | Dictionary<boolean | Object | Function>;
}

declare type Location = {
  _normalized?: boolean;
  name?: string;
  path?: string;
  hash?: string;
  query?: Dictionary<string>;
  params?: Dictionary<string>;
  append?: boolean;
  replace?: boolean;
}

declare type RawLocation = string | Location

declare type Route = {
  path: string;
  name: ?string;
  hash: string;
  query: Dictionary<string>;
  params: Dictionary<string>;
  fullPath: string;
  matched: Array<RouteRecord>;
  redirectedFrom?: string;
  meta?: any;
}
