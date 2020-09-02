<template>
  <div class="email-container full-container pos-r t-0">
    <div class="row">
      <div class="col-md-4 p-0 scrollable">
        <!-- Email List View -->
        <email-list-c :emails="emails" :title="inbox" />
      </div>
      <div class="col-md-8 p-0">
        <!-- Email Content -->
        <email-content-c :email="emails[0]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EmailListC, { Email } from "../components/EmailList.vue";
import EmailContentC from "../components/EmailContent.vue";
import { addMinutes, loremIpsum } from "../utils";

@Component({
  name: "EmailDefault",
  components: {
    EmailListC,
    EmailContentC
  }
})
export default class EmailDefault extends Vue {
  @Prop() private inbox!: string;
  protected emails: Email[] = [
    {
      date: addMinutes(new Date(), -1),
      sender: {
        name: "John Doe",
        address: "john@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg"
      },
      message: loremIpsum(),
      subject: "Title 1"
    },
    {
      date: addMinutes(new Date(), -2),
      sender: {
        name: "Moe Doe",
        address: "moe@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
      },
      message: loremIpsum(),
      subject: "Title 2"
    },
    {
      date: addMinutes(new Date(), -3),
      sender: {
        name: "Peter Doe",
        address: "peter@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg"
      },
      message: loremIpsum(),
      subject: "Title 3"
    },
    {
      date: addMinutes(new Date(), -4),
      sender: {
        name: "Anne Doe",
        address: "anne@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg"
      },
      message: loremIpsum(),
      subject: "Title 4"
    }
  ];
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.email-container
  top: 0
  left: 0
</style>
