<template>
  <div class="email-wrapper scrollable">
    <div class="email-compose">
      <div class="">
        <div class="peers p-20">
          <div class="peer">
            <div class="btn-group" role="group">
              <button type="button" class="btn">
                <i class="icon-trash"></i>
                <span class="pl-2" @click="cancel">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="layer bdT bdB w-100 fxg-1 scrollable pos-r">
        <form class="layer w-100 email-compose-body">
          <h4 class="mB-20">Send Message</h4>
          <div class="send-header">
            <div class="form-group">
              <input
                type="text"
                v-model="to"
                class="form-control"
                placeholder="To"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="cc"
                class="form-control"
                placeholder="CC"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="subject"
                class="form-control"
                placeholder="Email Subject"
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                v-model="message"
                class="form-control"
                placeholder="Say Hi..."
                rows="10"
              ></textarea>
            </div>
          </div>
          <div id="compose-area"></div>
          <div class="text-right mrg-top-30">
            <button class="btn btn-danger" :disabled="!(to.length > 0)">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "EmailCompose",
  components: {}
})
export default class EmailCompose extends Vue {
  protected to = "";
  protected cc = "";
  protected subject = "";
  protected message = "";

  cancel() {
    this.to = "";
    this.cc = "";
    this.subject = "";
    this.message = "";
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.btn
  color: inherit
</style>
