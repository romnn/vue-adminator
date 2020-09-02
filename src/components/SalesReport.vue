<template>
  <div class="layer bd w-100">
    <div class="bgc-light-blue-500 p-20">
      <div class="peers ai-c jc-sb gap-40">
        <div class="peer peer-greed">
          <h5>{{ title }}</h5>
          <p v-if="hasSubtitle" class="mB-0">Sales Report</p>
        </div>
        <div class="peer">
          <h3 class="text-right">
            {{ sales.total.currency }}{{ sales.total.value }}
          </h3>
        </div>
      </div>
    </div>
    <div class="table-responsive p-20">
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="(category, categoryIndex) in itemCategories"
              v-bind:key="'header-' + categoryIndex"
              class="bdwT-0"
            >
              {{
                category
                  .toLowerCase()
                  .substr(0, 1)
                  .toUpperCase() + category.substr(1).toLowerCase()
              }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, itemIndex) in sales.items"
            v-bind:key="'body-' + itemIndex"
          >
            <td class="fw-600">{{ item.name }}</td>
            <td>
              <span
                class="badge p-10 lh-0 tt-c badge-pill"
                :class="randomBadgeColor()"
                >{{ item.status }}</span
              >
            </td>
            <td>{{ item.date }}</td>
            <td>
              <span :class="item.price < 0 ? 'text-danger' : 'text-success'">
                <span v-if="item.price < 0">
                  -
                </span>
                {{ item._currency }}{{ Math.abs(item.price) }}
              </span>
            </td>
            <td
              v-for="(category, additionalIndex) in additionalCategories(item, [
                'name',
                'status',
                'date',
                'price'
              ])"
              v-bind:key="'additional-' + itemIndex + '-' + additionalIndex"
              class="bdwT-0"
            >
              {{ item[category] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "SalesReportC",
  components: {}
})
export default class SalesReportC extends Vue {
  @Prop({
    default: () => {
      return {
        total: "n.a.",
        items: []
      };
    }
  })
  private sales!: { total: string; items: string[]; title?: string };
  @Prop() private headline?: string;

  protected badgeColors = [
    "bgc-red-50 c-red-700",
    "bgc-deep-purple-50 c-deep-purple-700",
    "bgc-pink-50 c-pink-700",
    "bgc-green-50 c-green-700",
    "bgc-orange-50 c-orange-700",
    "bgc-yellow-50 c-yellow-700"
  ];

  get itemCategories() {
    return Object.keys(this.sales.items[0]).filter(key => {
      return key.toLowerCase().substr(0, 1) !== "_";
    });
  }
  get title() {
    if ((this.headline?.length ?? 0) > 0) return this.headline;
    return this.sales.title !== undefined ? this.sales.title : "Sales Report";
  }
  get hasSubtitle() {
    return (this.headline?.length ?? 0) > 0 || this.sales.title !== undefined;
  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

  randomBadgeColor() {
    return this.badgeColors[this.randomInteger(0, this.badgeColors.length - 1)];
  }

  additionalCategories(item: string, without: string[]) {
    return this.itemCategories.filter(key => {
      return Object.keys(item).includes(key) && !without.includes(key);
    });
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.table
  color: inherit
</style>
