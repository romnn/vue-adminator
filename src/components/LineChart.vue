<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

@Component({
  name: "LineChartC",
  components: {}
})
export default class LineChartC extends Mixins(Line, reactiveProp) {
  @Prop() options!: { [key: string]: string };
  fill = false;

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.addPlugin({
      id: "filler"
    });
    this.chartData?.datasets?.forEach(element => {
      if (!("fill" in element)) {
        element["fill"] = this.fill;
      }
    });
    // let merged = { ...this.chartData, ...this.fill };
    this.renderChart(this.chartData, this.options);
  }
}
</script>
