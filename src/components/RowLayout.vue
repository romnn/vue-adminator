<template>
  <div class="container-fluid">
    <h4 v-if="title" class="mT-10 mB-30">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "RowLayoutC",
  components: {}
})
export default class RowLayoutC extends Vue {
  @Prop() private title!: string;
}
</script>
