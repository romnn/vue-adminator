<template>
  <footer class="ta-c lh-0 fsz-sm">
    <span>
      <slot></slot>
    </span>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "FooterC",
  components: {}
})
export default class FooterC extends Vue {}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
footer
  z-index: 1000
  +theme-color-diff(background-color, bgc-content, 0)
  border-top-width: 1px
  border-top-style: solid
  +theme-color-diff(border-top-color, bgc-navbar, 0)
</style>
