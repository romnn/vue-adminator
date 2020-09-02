<template>
  <masonry-layout-c title="Charts">
    <!-- Line Chart -->
    <masonry-layout-tile-c section="Line Chart">
      <line-chart-c
        :height="80"
        :chart-data="lineChart.data"
        :options="lineChart.options"
      />
    </masonry-layout-tile-c>

    <!-- Random Line Chart -->
    <masonry-layout-tile-c section="Random Line Chart">
      <random-line-chart-c />
    </masonry-layout-tile-c>

    <!-- Area Chart -->
    <masonry-layout-tile-c section="Area Chart">
      <area-chart-c
        :height="220"
        :chart-data="areaChart.data"
        :options="areaChart.options"
      />
    </masonry-layout-tile-c>

    <!-- Scatter Chart -->
    <masonry-layout-tile-c section="Scatter Chart">
      <scatter-chart-c
        :height="220"
        :chart-data="scatterChart.data"
        :options="scatterChart.options"
      />
    </masonry-layout-tile-c>

    <!-- Bar Chart -->
    <masonry-layout-tile-c section="Bar Chart">
      <bar-chart-c
        :height="220"
        :chart-data="barChart.data"
        :options="barChart.options"
      />
    </masonry-layout-tile-c>

    <!-- Vue Trends -->
    <masonry-layout-tile-c section="Vue Trends">
      <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
        <div class="peer">
          <span>Smooth Trend</span>
        </div>
        <div class="peer">
          <trend
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth
          >
          </trend>
        </div>
      </div>
      <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
        <div class="peer">
          <span>Normal Trend</span>
        </div>
        <div class="peer">
          <trend
            :data="[0, 2, 5, 10, 3, 5, 1, 8, 0]"
            :gradient="['#c42b9e']"
            auto-draw
          >
          </trend>
        </div>
      </div>
      <div class="peers ai-c jc-sb fxw-nw bdB pY-15">
        <div class="peer">
          <span>Trend are just SVG's</span>
        </div>
        <div class="peer">
          <trend
            :data="[0, 2, 5, 10, 3, 5, 0]"
            :gradient="['#2bc4bc', '#2b9bc4']"
            stroke="green"
            stroke-width="10"
            stroke-linecap="round"
            stroke-dasharray="4 1"
            auto-draw
          >
          </trend>
        </div>
      </div>
    </masonry-layout-tile-c>

    <!-- Pie Chart -->
    <masonry-layout-tile-c section="Pie Chart">
      <pie-chart-c
        :height="220"
        :chart-data="pieChart.newUsers.data"
        :options="pieChart.newUsers.options"
      />
    </masonry-layout-tile-c>

    <!-- Tachometers -->
    <masonry-layout-tile-c section="Tachometers">
      <div>
        <div class="peers mT-20 jc-sb ta-c">
          <div class="peer">
            <tachometer-chart-c :size="80" :percent="75" fillColor="#f44336" />
            <h6 class="fsz-sm">New Users</h6>
          </div>
          <div class="peer">
            <tachometer-chart-c :size="80" :percent="50" fillColor="#2196f3" />
            <h6 class="fsz-sm">New Purchases</h6>
          </div>
          <div class="peer">
            <tachometer-chart-c :size="80" :percent="65" fillColor="#f44336" />
            <h6 class="fsz-sm">New Customers</h6>
          </div>
          <div class="peer">
            <tachometer-chart-c :size="80" :percent="90" fillColor="#ff9800" />
            <h6 class="fsz-sm">Bounce Rate</h6>
          </div>
        </div>
      </div>
    </masonry-layout-tile-c>
  </masonry-layout-c>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { COLORS } from "../colors";

import MasonryLayoutC from "../components/MasonryLayout.vue";
import MasonryLayoutTileC from "../components/MasonryLayoutTile.vue";

import RandomLineChartC from "../components/RandomLineChart.vue";
import LineChartC from "../components/LineChart.vue";
import AreaChartC from "../components/AreaChart.vue";
import ScatterChartC from "../components/ScatterChart.vue";
import BarChartC from "../components/BarChart.vue";
import PieChartC from "../components/PieChart.vue";
import TachometerChartC from "../components/TachoChart.vue";

@Component({
  name: "Charts",
  components: {
    TachometerChartC,
    PieChartC,
    BarChartC,
    ScatterChartC,
    LineChartC,
    RandomLineChartC,
    AreaChartC,
    MasonryLayoutC,
    MasonryLayoutTileC
  }
})
export default class Charts extends Vue {
  protected lineChart = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Series A",
          backgroundColor: "rgba(237, 231, 246, 0.5)",
          borderColor: COLORS["deep-purple-500"],
          pointBackgroundColor: COLORS["deep-purple-700"],
          borderWidth: 2,
          data: [60, 50, 70, 60, 50, 70, 60]
        },
        {
          label: "Series B",
          backgroundColor: "rgba(232, 245, 233, 0.5)",
          borderColor: COLORS["blue-500"],
          pointBackgroundColor: COLORS["blue-700"],
          borderWidth: 2,
          data: [70, 75, 85, 70, 75, 85, 70]
        }
      ]
    },

    options: {
      legend: {
        display: false
      }
    }
  };
  protected areaChart = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          backgroundColor: "rgba(3, 169, 244, 0.5)",
          borderColor: COLORS["light-blue-800"],
          data: [10, 50, 20, 40, 60, 30, 70],
          label: "Dataset"
        }
      ]
    },

    options: {}
  };
  protected scatterChart = {
    data: {
      datasets: [
        {
          label: "My First dataset",
          borderColor: COLORS["red-500"],
          backgroundColor: COLORS["red-500"],
          data: [
            { x: 10, y: 20 },
            { x: 30, y: 40 },
            { x: 50, y: 60 },
            { x: 70, y: 80 },
            { x: 90, y: 100 },
            { x: 110, y: 120 },
            { x: 130, y: 140 }
          ]
        },
        {
          label: "My Second dataset",
          borderColor: COLORS["green-500"],
          backgroundColor: COLORS["green-500"],
          data: [
            { x: 150, y: 160 },
            { x: 170, y: 180 },
            { x: 190, y: 200 },
            { x: 210, y: 220 },
            { x: 230, y: 240 },
            { x: 250, y: 260 },
            { x: 270, y: 280 }
          ]
        }
      ]
    },
    options: {}
  };
  protected barChart = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: COLORS["deep-purple-500"],
          borderColor: COLORS["deep-purple-800"],
          borderWidth: 1,
          data: [10, 50, 20, 40, 60, 30, 70]
        },
        {
          label: "Dataset 2",
          backgroundColor: COLORS["light-blue-500"],
          borderColor: COLORS["light-blue-800"],
          borderWidth: 1,
          data: [10, 50, 20, 40, 60, 30, 70]
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: "bottom"
      }
    }
  };
  protected pieChart = {
    newUsers: {
      data: {
        labels: ["Red", "Yellow", "Blue"],
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: [
              COLORS["deep-purple-500"],
              COLORS["light-blue-500"],
              COLORS["pink-500"]
            ]
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  };
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
