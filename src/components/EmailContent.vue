<template>
  <div class="email-content h-100">
    <div v-if="!email">
      No email to display
    </div>
    <div v-else class="h-100 scrollable pos-r">
      <div class="peers ai-c jc-sb p-20 fxw-nw d-n@md+">
        <div class="peer">
          <div class="btn-group" role="group">
            <button type="button" class="fsz-xs btn bdrs-2 mR-3 cur-p">
              <i class="icon-angle-left"></i>
            </button>
            <button type="button" class="fsz-xs btn bdrs-2 mR-3 cur-p">
              <i class="icon-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="email-content-wrapper">
        <!-- Header -->
        <div class="peers ai-c jc-sb pX-40 pY-30">
          <div class="peers peer-greed">
            <div class="peer mR-20">
              <img
                v-if="email.sender && email.sender.avatar"
                class="bdrs-50p w-3r h-3r"
                alt=""
                :src="email.sender.avatar"
              />
            </div>
            <div class="peer">
              <small>{{ prettyDateFromTimestamp(email.date) }}</small>
              <h5 class="mB-5">{{ email.sender.name }}</h5>
              <span>From: {{ email.sender.address }}</span>
            </div>
          </div>
          <div class="peer">
            <a href="" class="btn btn-danger bdrs-50p p-15 lh-0">
              <i class="icon-angle-double-left"></i>
            </a>
          </div>
        </div>

        <!-- Content -->
        <div class="bdT pX-40 pY-30">
          <h4>{{ email.subject }}</h4>
          <p>
            {{ email.message || "This email has no content" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "EmailContentC",
  components: {}
})
export default class EmailContentC extends Vue {
  @Prop() private email?: string;

  prettyDateFromTimestamp(timestamp: string) {
    return new Date(timestamp).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.btn
  color: inherit
</style>
