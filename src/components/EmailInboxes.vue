<template>
  <div class="email-side-nav remain-height ov-h">
    <div class="h-100 layers">
      <!-- Compose New Message Button -->
      <div class="p-20 layer w-100">
        <router-link
          to="/dashboard/email/compose"
          class="btn btn-danger btn-block"
          >New Message</router-link
        >
      </div>

      <div class="scrollable pos-r bdT layer w-100 fxg-1">
        <ul class="p-20 nav flex-column">
          <!-- Inboxes -->
          <li
            class="nav-item"
            v-for="(inbox, index) in inboxes"
            v-bind:key="index"
          >
            <router-link :to="inbox.link" class="nav-link">
              <div class="peers ai-c jc-sb">
                <div class="peer peer-greed">
                  <i class="mR-10" :class="inbox.icon"></i>
                  <span>{{ inbox.name }}</span>
                </div>
                <div class="peer">
                  <span
                    class="badge badge-pill"
                    :class="'bgc-' + inbox.color + '-50'"
                    >{{ inbox.messageCount }}</span
                  >
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "EmailInboxesC",
  components: {}
})
export default class EmailInboxesC extends Vue {
  @Prop() private inboxes!: string[];
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.nav-link.router-link-active,
.nav-link.router-link-excact-active
  font-weight: bold
  color: #f44336 !important
</style>
