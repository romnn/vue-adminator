<template>
  <div class="email-container pos-r full-container remain-height w-100">
    <div class="email-app">
      <div class="row m-0">
        <!-- Inboxes -->
        <div class="col-md-3 p-0">
          <email-inboxes-c :inboxes="inboxes" />
        </div>
        <div class="col-md-9 p-0">
          <!-- Email subviews -->
          <div>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmailInboxesC from "../components/EmailInboxes.vue";
import { addMinutes, loremIpsum } from "../utils";

@Component({
  name: "Email",
  components: {
    EmailInboxesC
  }
})
export default class Email extends Vue {
  protected inboxes = [
    {
      icon: "icon-email",
      name: "Inbox",
      messageCount: 99,
      color: "deep-purple",
      link: { name: "inboxes", params: { inbox: "inbox" } }
    },
    {
      icon: "icon-share",
      name: "Sent",
      messageCount: 12,
      color: "green",
      link: { name: "inboxes", params: { inbox: "sent" } }
    },
    {
      icon: "icon-star",
      name: "Important",
      messageCount: 3,
      color: "blue",
      link: { name: "inboxes", params: { inbox: "important" } }
    },
    {
      icon: "icon-file",
      name: "Drafts",
      messageCount: 5,
      color: "amber",
      link: { name: "inboxes", params: { inbox: "drafts" } }
    },
    {
      icon: "icon-alert",
      name: "Spam",
      messageCount: 1,
      color: "red",
      link: { name: "inboxes", params: { inbox: "spam" } }
    },
    {
      icon: "icon-trash",
      name: "Trash",
      messageCount: 99,
      color: "red",
      link: { name: "inboxes", params: { inbox: "trash" } }
    }
  ];
  protected emails = [
    {
      date: addMinutes(new Date(), -1),
      sender: "John Doe",
      message: loremIpsum(),
      subject: "Title 1"
    },
    {
      date: addMinutes(new Date(), -2),
      sender: "Moe Doe",
      message: loremIpsum(),
      subject: "Title 2"
    },
    {
      date: addMinutes(new Date(), -3),
      sender: "Peter Doe",
      message: loremIpsum(),
      subject: "Title 3"
    },
    {
      date: addMinutes(new Date(), -4),
      sender: "Anne Doe",
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
