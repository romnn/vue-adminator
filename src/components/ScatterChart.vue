<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { Scatter, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

@Component({
  name: "ScatterChartC",
  components: {}
})
export default class ScatterChartC extends Mixins(Scatter, reactiveProp) {
  @Prop() private options?: Record<string, string>;
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
}
</script>
