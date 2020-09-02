<template>
  <div>
    <!-- Search -->
    <div class="bdB layer w-100">
      <input
        type="text"
        placeholder="Search contacts..."
        v-model="contactSearchString"
        name="chatSearch"
        class="form-constrol p-15 bdrs-0 w-100 bdw-0"
      />
    </div>

    <!-- List -->
    <div class="layer w-100 fxg-1 scrollable pos-r">
      <div
        v-for="(contact, index) in contactList"
        v-bind:key="index"
        class="peers fxw-nw ai-c p-20 bdB cur-p"
      >
        <div class="peer">
          <img :src="contact.avatar" alt="" class="w-3r h-3r bdrs-50p" />
        </div>
        <div class="peer peer-greed pL-20">
          <h6 class="mB-0 lh-1 fw-400">{{ contact.name }}</h6>
          <small class="lh-1" :class="colorForStatus(contact.status)">{{
            contact.status
          }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface Contact {
  index: number;
  name: string;
  status: string;
  avatar?: string;
}

@Component({
  name: "ChatContactsC",
  components: {}
})
export default class ChatContactsC extends Vue {
  @Prop({ default: () => [] }) private contacts!: Contact[];

  contactSearchString = "";

  get contactList() {
    return this.contacts
      .filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(this.contactSearchString.toLowerCase());
      })
      .sort((a, b) => {
        if (!(a.index !== undefined && b.index !== undefined)) return 0;
        return a.index > b.index ? 1 : b.index > a.index ? -1 : 0;
      });
  }

  colorForStatus(status: string) {
    return status.toLowerCase() === "online"
      ? "c-green-500"
      : status.toLowerCase() === "offline"
      ? "c-grey-500"
      : status.toLowerCase() === "busy"
      ? "c-red-500"
      : "c-amber-500";
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
