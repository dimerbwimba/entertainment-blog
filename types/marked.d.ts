declare module 'marked' {
    const marked: {
      (str: string, options?: marked.MarkedOptions): string;
      options: marked.MarkedOptions;
      setOptions: (options: marked.MarkedOptions) => marked.MarkedOptions;
      parse: (src: string, options?: marked.MarkedOptions) => string;
      parser: (src: string, options?: marked.MarkedOptions) => string;
      lexer: (src: string, options?: marked.MarkedOptions) => marked.TokensList;
    };
  
    namespace marked {
      export type RendererObj = {
        [key: string]: (...args: any[]) => string;
      };
  
      export interface MarkedOptions {
        renderer?: RendererObj;
        pedantic?: boolean;
        gfm?: boolean;
        tables?: boolean;
        breaks?: boolean;
        sanitize?: boolean;
        mangle?: boolean;
        smartLists?: boolean;
        silent?: boolean;
        langPrefix?: string;
        smartypants?: boolean;
        headerPrefix?: string;
        xhtml?: boolean;
      }
  
      export interface TokensList extends Array<marked.Token> {}
  
      export interface Token {
        type: string;
        text?: string;
        lang?: string;
        raw?: string;
        escaped?: boolean;
        links?: marked.Link[];
        tokens?: marked.TokensList;
      }
  
      export interface Link {
        title?: string;
        href: string;
      }
    }
  
    export = marked;
  }