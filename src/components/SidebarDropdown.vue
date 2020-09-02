<template>
  <li class="nav-item dropdown">
    <!-- Dropdown Toggle -->
    <a
      class="dropdown-toggle"
      :for="uuid"
      data-toggle="collapse"
      :href="'#' + uuid"
      aria-expanded="true"
      :aria-controls="uuid"
      @click="open = !open"
    >
      <span class="icon-holder">
        <slot name="icon"></slot>
      </span>
      <span class="title"> {{ title }} </span>
      <span class="arrow">
        <i class="icon-angle-right"></i>
      </span>
    </a>
    <!-- Dropdown menu entries -->
    <div class="collapse" :id="uuid">
      <ul class="dropdown-menu">
        <slot name="entries"></slot>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "SidebarDropdownC",
  components: {}
})
export default class SidebarDropdownC extends Vue {
  @Prop({ default: "Sidebar Dropdown Element" }) private title!: string;
  @Prop({ default: false }) private active?: boolean;

  protected open = false;

  get uuid() {
    return this.title.replace(/\s+/g, "");
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
