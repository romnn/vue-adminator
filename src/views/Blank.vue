<template>
  <div>
    <p>
      This view is a perfect starting point if you want to build new, custom
      views
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Blank",
  components: {}
})
export default class Blank extends Vue {}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
