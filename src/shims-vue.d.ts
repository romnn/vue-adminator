import Vue from "vue";
import { AxiosStatic } from "axios";
import { Action, Getter, Mutation, ModuleTree } from "vuex";
import VueRouter from "vue-router";
import NProgress from "vue-nprogress";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types" {
  export interface ActionTree<S, R> {
    [key: string]: Action<S, R>;
  }

  export interface MutationTree<S> {
    [key: string]: Mutation<S>;
  }

  export interface GetterTree<S, R> {
    [key: string]: Getter<S, R>;
  }

  export interface Module<S, R> {
    namespaced?: boolean;
    state?: S | (() => S);
    getters?: GetterTree<S, R>;
    actions?: ActionTree<S, R>;
    mutations?: MutationTree<S>;
    modules?: ModuleTree<R>;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $redrawVueMasonry: () => void;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    nprogress?: NProgress;
    axios?: AxiosStatic;
  }
}
