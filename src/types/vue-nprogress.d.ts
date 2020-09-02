declare module "vue-nprogress" {
  import { PluginFunction } from "vue";

  interface NprogressOptions {
    showSpinner?: boolean;
    latencyThreshold?: number;
    router?: boolean;
    http?: boolean;
    parent?: string;
  }

  export class NProgress {
    constructor(options?: NprogressOptions);
    static install: PluginFunction<NprogressOptions>;
  }

  export default NProgress;
}
