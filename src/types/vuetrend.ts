declare module "vuetrend" {
  import { PluginFunction } from "vue";

  export class Trend {
    static install: PluginFunction<void>;
  }

  export default Trend;
}
