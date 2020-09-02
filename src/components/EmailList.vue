<template>
  <div class="email-list h-100 layers">
    <!-- Email Control Buttons -->
    <div class="layer w-100">
      <div class="peers ai-c jc-sb p-20 fxw-nw">
        <div class="peer">
          <div class="btn-group" role="group">
            <button
              type="button"
              class="email-side-toggle d-n@md+ btn bdrs-2 mR-3 cur-p"
            >
              <i class="icon-menu"></i>
            </button>
            <button type="button" class="btn bdrs-2 mR-3 cur-p">
              <i class="icon-folder"></i>
            </button>
            <button type="button" class="btn bdrs-2 mR-3 cur-p">
              <i class="icon-tag"></i>
            </button>
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn cur-p no-after dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon-more-alt"></i>
              </button>
              <ul class="dropdown-menu fsz-sm" aria-labelledby="btnGroupDrop1">
                <li>
                  <a class="d-b td-n pY-5 pX-10">
                    <i class="icon-trash mR-10"></i>
                    <span>Delete</span>
                  </a>
                </li>
                <li>
                  <a class="d-b td-n pY-5 pX-10">
                    <i class="icon-alert mR-10"></i>
                    <span>Mark as Spam</span>
                  </a>
                </li>
                <li>
                  <a class="d-b td-n pY-5 pX-10">
                    <i class="icon-star mR-10"></i>
                    <span>Star</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {{ title | capitalize }}
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
    </div>

    <!-- Search -->
    <div class="layer w-100">
      <div class="bdT bdB">
        <input
          type="text"
          v-model="emailSearchString"
          class="form-control m-0 bdw-0 pY-15 pX-20"
          placeholder="Search..."
        />
      </div>
    </div>

    <!-- Email List -->
    <div class="layer w-100 fxg-1 scrollable pos-r">
      <div class="">
        <div
          v-for="(email, index) in emailList"
          v-bind:key="index"
          class="email-list-item peers fxw-nw p-20 bdB cur-p"
        >
          <div class="peer mR-10">
            <div class="checkbox checkbox-circle checkbox-info peers ai-c">
              <input
                type="checkbox"
                id="inputCall1"
                name="inputCheckboxesCall"
                class="peer"
              />
              <label
                for="inputCall1"
                class=" peers peer-greed js-sb ai-c"
              ></label>
            </div>
          </div>
          <div class="peer peer-greed ov-h">
            <div class="peers ai-c">
              <div class="peer peer-greed">
                <h6>{{ email.sender.name }}</h6>
              </div>
              <div class="peer">
                <small>{{ timeSinceString(email.date) }} ago</small>
              </div>
            </div>
            <h5 class="fsz-def tt-c">{{ email.subject }}</h5>
            <span class="whs-nw w-100 ov-h tov-e d-b">
              {{ email.message }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { timeSincePretty } from "../utils";

export interface Email {
  date?: Date;
  subject: string;
  message: string;
  sender: {
    name: string;
    address: string;
    avatar?: string;
  };
}

@Component({
  name: "EmailListC",
  components: {},
  filters: {
    capitalize(s: string) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }
})
export default class EmailListC extends Vue {
  @Prop() private emails?: Email[];
  @Prop() private title?: string;

  protected emailSearchString = "";

  timeSinceString(date: Date) {
    const diff = timeSincePretty(date, new Date());
    return diff.hrs !== 0
      ? diff.hrs + " hrs"
      : diff.min !== 0
      ? diff.min + " min"
      : diff.sec + " sec";
  }

  get emailList() {
    return this.emails
      ?.filter((email: Email) => {
        return [
          email.subject.toLowerCase(),
          email.sender.name.toLowerCase(),
          email.sender.address.toLowerCase(),
          email.message.toLowerCase()
        ].some(data => {
          return data.includes(this.emailSearchString.toLowerCase());
        });
      })
      .sort((a: Email, b: Email) => {
        if (a.date !== undefined && b.date !== undefined) {
          return a.date > b.date ? -1 : b.date > a.date ? 1 : 0;
        }
        return -1;
      });
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.btn
  color: inherit
</style>
