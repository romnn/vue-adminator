<template>
  <div>
    <line-chart-c :chart-data="dataCollection"></line-chart-c>
    <button
      type="button"
      class="btn btn-sm cur-p btn-danger"
      @click="fillData()"
    >
      Randomize
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LineChartC from "../components/LineChart.vue";

export interface Dataset {
  label?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  data?: number[];
}

@Component({
  name: "RandomLineChartC",
  components: {
    LineChartC
  }
})
export default class RandomLineChartC extends Vue {
  @Prop({ default: "Account Dropdown" }) private username!: string;
  @Prop() private picture?: string;

  protected dataCollection: {
    labels: number[];
    datasets: Dataset[];
  } = { labels: [], datasets: [] };

  fillData() {
    this.dataCollection = {
      labels: [this.getRandomInt(), this.getRandomInt()],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "transparent",
          borderColor: "#f87979",
          borderWidth: 3,
          data: [this.getRandomInt(), this.getRandomInt()]
        },
        {
          label: "Data Two",
          borderColor: "#f85979",
          borderWidth: 3,
          backgroundColor: "#34a5eb",
          data: [this.getRandomInt(), this.getRandomInt()]
        }
      ]
    };
  }

  getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
  }

  mounted() {
    this.fillData();
  }
}
</script>
<style scoped lang="sass">
@import '@/style/global.sass';
</style>
