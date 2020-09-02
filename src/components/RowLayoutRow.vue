<template>
  <div class="row">
    <div class="col-md-12">
      <div class="shadow-row bd bdrs-3 p-20 mB-20">
        <h4 class="mB-20">{{ section }}</h4>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "RowLayoutRowC",
  components: {}
})
export default class RowLayoutRowC extends Vue {
  @Prop() private section!: string;
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.shadow-row
  +transition(all 0.1s ease-in)
  +theme-color-darken(background-color, bgc-body, 3)

  margin: 20px 30px
  padding: 20px
  border-radius: 5px
  box-shadow: 0 10px 20px rgba(0,0,0,0.04), 0 6px 6px rgba(0,0,0,0.04)
  &:hover
    box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)
</style>
