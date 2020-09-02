<template>
  <div class="layer w-100 glance-chart-container">
    <div class="peers ai-sb fxw-nw pos-r">
      <div class="peer peer-greed">
        <bar-chart-c
          class="glance-chart pos-r"
          :height="height"
          :width="width"
          :chart-data="chartData"
          :options="options"
        >
        </bar-chart-c>
      </div>
      <div class="glance-percent peer pos-a centerY">
        <span
          class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15"
          :class="percentLabelColor"
          :style="labelColor ? 'background-color: ' + labelColor : ''"
          >{{ percentLabel }}%</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BarChartC from "../components/BarChart.vue";

@Component({
  name: "GlanceC",
  components: {
    BarChartC
  }
})
export default class GlanceC extends Vue {
  @Prop({ default: 100 }) private width!: number;
  @Prop({ default: 40 }) private height!: number;
  @Prop() private samples!: string[];
  @Prop({ default: 15 }) private maxSamples!: number;
  @Prop({ default: 50 }) private percent!: number;
  @Prop({ default: "blue" }) private fillColor!: string;
  @Prop({ default: "red" }) private hoverColor!: string;
  @Prop() private labelColor?: string;
  @Prop() private prefix?: string;

  protected options = {
    responsive: false,
    tooltips: {
      enabled: false
    },
    animation: {
      animateScale: true
    },
    legend: {
      showTooltips: false,
      display: false,
      labels: {
        display: false
      }
    },
    layout: {
      padding: 1
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            drawBorder: false,
            display: false
          }
        }
      ],
      xAxes: [
        {
          categoryPercentage: 1.0,
          barPercentage: 0.9,
          display: false,
          // maxBarThickness: 10,
          // minBarLength: 2,
          gridLines: {
            drawBorder: false,
            display: false
          }
        }
      ]
    }
  };

  get isPositive() {
    return Math.sign(this.percent) > 0;
  }
  get percentSign() {
    return this.isPositive ? "+" : "";
  }
  get percentLabelColor() {
    if (this.labelColor) return "";
    else if (this.prefix) return "bgc-purple-50 c-purple-500";
    else if (this.isPositive) return "bgc-green-50 c-green-500";
    return "bgc-red-50 c-red-500";
  }
  get percentLabel() {
    if (this.prefix) return this.prefix + this.percent;
    return this.percentSign + this.percent;
  }
  get sampleData() {
    return this.samples.slice(
      Math.max(0, this.samples.length - this.maxSamples),
      this.samples.length
    );
  }
  get chartData() {
    return {
      labels: new Array(this.sampleData.length).fill("Sometime"),
      datasets: [
        {
          data: this.sampleData,
          label: "a timeseries",
          backgroundColor: this.fillColor,
          hoverBackgroundColor: this.hoverColor
        }
      ]
    };
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.glance-chart-container
  display: inline-block
  overflow: visible
  .glance-percent
    right: 0
  .glance-chart
    overflow: visible
    canvas
      overflow: visible
</style>
