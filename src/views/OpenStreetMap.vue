<template>
  <row-layout-c title="Open Street Map">
    <row-layout-row-c section="">
      <div class="map-container">
        <div id="map"></div>
      </div>
    </row-layout-row-c>
  </row-layout-c>
</template>

<script lang="ts">
import L from "leaflet";
import { Component, Prop, Vue } from "vue-property-decorator";
import RowLayoutC from "../components/RowLayout.vue";
import RowLayoutRowC from "../components/RowLayoutRow.vue";

@Component({
  name: "OpenStreetMap",
  components: {
    RowLayoutC,
    RowLayoutRowC
  }
})
export default class extends Vue {
  @Prop({ default: "http://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" })
  url!: string;
  @Prop({
    default:
      '&copy; <a href="http://openstreetmap.de/copyright">OpenStreetMap</a> contributors'
  })
  attribution!: string;

  protected map!: L.Map;

  mounted() {
    this.map = L.map("map").setView([52.5170365, 13.3888599], 5);

    L.tileLayer(this.url, {
      attribution: this.attribution
    }).addTo(this.map);
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
@import "~leaflet/dist/leaflet.css";

.map-container
  height: 50vh
  margin: 0
  position: relative

  #map
    height: 100%

  .leaflet-top
    z-index: 1000
</style>
