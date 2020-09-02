<template>
  <div>
    <h4 v-if="title" class="pos-r m-0">{{ title }}</h4>
    <div
      v-masonry
      item-selector=".item"
      columnWidth=".masonry-sizer"
      :percentPosition="true"
      class="row gap-20 pos-r"
    >
      <div class="masonry-sizer col-md-6"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "MasonryLayoutC",
  components: {}
})
export default class MasonryLayoutC extends Vue {
  @Prop() private title!: string;
  mounted() {
    this.$redrawVueMasonry();
  }
}
</script>
