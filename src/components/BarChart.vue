<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

@Component({
  name: "BarChartC",
  components: {}
})
export default class BarChartC extends Mixins(Bar, reactiveProp) {
  @Prop() options!: { [key: string]: string };

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
}
</script>
