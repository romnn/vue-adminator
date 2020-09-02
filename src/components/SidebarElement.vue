<template>
  <li class="nav-item">
    <router-link class="sidebar-link" :class="{ active: active }" :to="route">
      <span class="dot-holder"></span>
      <span class="icon-holder">
        <slot name="icon"></slot>
      </span>
      <span class="title">{{ title }}</span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "SidebarElementC",
  components: {}
})
export default class SidebarElementC extends Vue {
  @Prop({ default: "Sidebar Element" }) private title!: string;
  @Prop({ default: "/" }) private route!: string;
  @Prop({ default: false }) private active!: boolean;
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
