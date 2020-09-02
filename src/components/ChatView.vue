<template>
  <div class="layer w-100 fxg-1 scrollable pos-r">
    <div class="p-20 gapY-15">
      <div
        v-for="section in Object.keys(chatSections)"
        v-bind:key="section"
        class=""
      >
        <!-- Right -->
        <div v-if="currentViewer(chatSections[section].sender)">
          <div class="pos-a">
            <img
              class="w-2r bdrs-50p"
              :src="chat[chatSections[section].sender].avatar"
              alt=""
            />
          </div>
          <div class="ml-5">
            <div class="layers ai-fs gapY-5">
              <div
                v-for="message in chatSections[section].chat"
                v-bind:key="message.timestamp + message.sender"
              >
                <div class="peers pY-3 pX-10 bdrs-2">
                  <div class="peer mR-10">
                    <small>{{ message.timestamp | prettyTimestamp }}</small>
                  </div>
                  <div class="peer-greed">
                    <span>{{ message.message }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Left -->
        <div v-else class="peers ai-fe">
          <div class="ord-1 mL-20">
            <img
              class="w-2r bdrs-50p"
              :src="chat[chatSections[section].sender].avatar"
              alt=""
            />
          </div>
          <div class="peer peer-greed ord-0">
            <div class="layers ai-fe gapY-10">
              <div
                v-for="message in chatSections[section].chat"
                v-bind:key="message.timestamp + message.sender"
              >
                <div class="peers pY-3 pX-10">
                  <div class="peer mL-10 ord-1">
                    <small>{{ message.timestamp | prettyTimestamp }}</small>
                  </div>
                  <div class="peer-greed">
                    <span>{{ message.message }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface ChatSections {
  [key: number]: {
    sender: string;
    chat: ChatMessage[];
  };
}

export interface ChatMessage {
  timestamp: number;
  message: string;
  sender?: string;
}

export interface Chat {
  // chat members are the keys
  [key: string]: {
    fullname: string;
    avatar?: string;
    chat: ChatMessage[];
  };
}

@Component({
  name: "ChatViewC",
  components: {},
  filters: {
    prettyTimestamp(timestamp: number) {
      return new Date(timestamp).toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  }
})
export default class extends Vue {
  @Prop({ default: "" }) private for!: string;
  @Prop({ default: {} }) private chat!: Chat;

  get combinedChat(): ChatMessage[] {
    return Object.keys(this.chat).reduce((acc, sender) => {
      return acc.concat(
        this.chat[sender].chat.reduce((chat, message) => {
          message.sender = sender;
          chat.push(message);
          return chat;
        }, [] as ChatMessage[])
      );
    }, [] as ChatMessage[]);
  }
  get sortedChat() {
    return this.combinedChat.slice().sort((a, b) => {
      return a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0;
    });
  }
  get chatSections(): ChatSections {
    return this.sortedChat.reduce((acc, message) => {
      const currentSize = Object.keys(acc).length;
      const recentSection = acc[currentSize] || { chat: [] };
      const recentMessage =
        recentSection.chat[recentSection.chat.length - 1] || null;
      if (recentMessage && recentMessage.sender === message.sender) {
        acc[currentSize].chat.push(message);
      } else {
        acc[currentSize + 1] = {
          sender: message.sender ?? "Unknown",
          chat: [message]
        };
      }
      return acc;
    }, {} as ChatSections);
  }

  currentViewer(sender: string) {
    return this.for === sender;
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
