<template>
  <div class="col-md-4">
    <div class="bdrs-3 ov-h bd">
      <!-- Day -->
      <div class="bgc-deep-purple-500 ta-c p-30">
        <h1 class="fw-300 mB-5 lh-1 c-white">
          {{
            date.toLocaleDateString(lang, {
              day: "numeric"
            })
          }}
          <span class="fsz-def">st</span>
        </h1>
        <h3 class="c-white">
          {{
            date.toLocaleDateString(lang, {
              weekday: "long"
            })
          }}
        </h3>
      </div>

      <div class="pos-r">
        <!-- Add button -->
        <button
          type="button"
          @click="$emit('add')"
          class="mT-nv-50 pos-a r-10 t-2 btn cur-p bdrs-50p p-0 w-3r h-3r btn-warning"
        >
          <i class="icon-plus"></i>
        </button>

        <!-- Items -->
        <ul class="m-0 p-0 mT-20">
          <li
            v-for="(item, index) in items"
            v-bind:key="index"
            class="bdB peers ai-c jc-sb fxw-nw"
          >
            <a class="td-n p-20 peers fxw-nw mR-20 peer-greed">
              <div class="peer mR-15">
                <i class="icon-alarm-clock" :class="randomColorClass()"></i>
              </div>
              <div class="peer">
                <span class="fw-600">{{ getTimeRangeString(item) }}</span>
                <div>
                  <span>
                    {{
                      item.start.toLocaleDateString(lang, { month: "short" })
                    }}
                    {{
                      item.start.toLocaleDateString(lang, { day: "numeric" })
                    }}
                    -
                  </span>
                  <i> {{ item.desc }} </i>
                </div>
              </div>
            </a>
            <div class="peers mR-15">
              <div class="peer">
                <a
                  class="td-n c-deep-purple-500 cur-p cH-blue-500 fsz-md p-5"
                  @click="$emit('edit', item)"
                >
                  <i class="icon-pencil"></i>
                </a>
              </div>
              <div class="peer">
                <a
                  class="td-n c-red-500 cH-blue-500 cur-p fsz-md p-5"
                  @click="$emit('remove', item)"
                >
                  <i class="icon-trash"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface ReminderItem {
  done?: boolean;
  title?: string;
  start?: Date;
  end?: Date;
  fullDay?: boolean;
  desc?: string;
}

@Component({
  name: "RemindersC",
  components: {}
})
export default class RemindersC extends Vue {
  @Prop({ default: [] }) private items!: ReminderItem[];
  @Prop({ default: () => new Date() }) private date?: Date;
  @Prop({ default: "en-EN" }) private lang!: string;
  @Prop({ default: "UTC" }) private timezone!: string;

  protected colorClasses = [
    "c-green-500",
    "c-indigo-500",
    "c-blue-500",
    "c-red-500"
  ];

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

  randomColorClass() {
    return this.colorClasses[
      this.randomInteger(0, this.colorClasses.length - 1)
    ];
  }

  prettyTime(date: Date) {
    return date.toLocaleTimeString(this.timezone, {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  isSameDay(date1: Date, date2: Date) {
    if (date1.getUTCDate() !== date2.getUTCDate()) return false;
    if (date1.getUTCFullYear() !== date2.getUTCFullYear()) return false;
    return date1.getUTCMonth() === date2.getUTCMonth();
  }

  getTimeRangeString(item: ReminderItem) {
    if (item?.fullDay == true) return "All day";
    const start = item?.start;
    const end = item?.end;
    if (start !== undefined && end !== undefined) {
      return !this.isSameDay(start, end)
        ? this.prettyTime(start)
        : this.prettyTime(start) + " - " + this.prettyTime(end);
    }
    return start !== undefined
      ? this.prettyTime(start)
      : end !== undefined
      ? this.prettyTime(end)
      : "Unknown";
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
