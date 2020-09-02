<template>
  <div class="full-container">
    <div class="peers fxw-nw pos-r">
      <!-- Chat Sidebar -->
      <div class="peer bdR" id="chat-sidebar">
        <chat-contacts-c :contacts="contacts" />
      </div>

      <!-- Chat Box -->
      <div class="peer peer-greed" id="chat-box">
        <div class="layers h-100">
          <div class="layer w-100">
            <!-- Chat status header -->
            <div class="peers fxw-nw jc-sb ai-c pY-20 pX-30">
              <div class="peers ai-c">
                <div class="peer d-n@md+">
                  <a
                    href="#"
                    id="chat-sidebar-toggle"
                    class="td-n cH-blue-500 mR-30"
                  >
                    <i class="icon-menu"></i>
                  </a>
                </div>
                <div class="peer mR-20">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    alt=""
                    class="w-3r h-3r bdrs-50p"
                  />
                </div>
                <div class="peer">
                  <h6 class="lh-1 mB-0">John Doe</h6>
                  <i class="fsz-sm lh-1">Typing...</i>
                </div>
              </div>
              <div class="peers">
                <a href="#" class="peer td-n cH-blue-500 fsz-md mR-30" title="">
                  <i class="icon-video-camera"></i>
                </a>
                <a href="#" class="peer td-n cH-blue-500 fsz-md mR-30" title="">
                  <i class="icon-headphone"></i>
                </a>
                <a href="#" class="peer td-n cH-blue-500 fsz-md" title="">
                  <i class="icon-more"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Chat view -->
          <chat-view-c :chat="chat" :for="Object.keys(chat)[0]" />

          <!-- Chat Send Text Field -->
          <div class="layer w-100">
            <div class="p-20 bdT">
              <div class="pos-r">
                <input
                  type="text"
                  class="form-control bdrs-10em m-0"
                  placeholder="Say something..."
                />
                <button
                  type="button"
                  class="btn btn-primary bdrs-50p w-2r p-0 h-2r pos-a r-1 t-1"
                >
                  <i class="c-white icon-location-arrow"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatViewC, { Chat } from "../components/ChatView.vue";
import ChatContactsC, { Contact } from "../components/ChatContacts.vue";

@Component({
  name: "Chat",
  components: {
    ChatViewC,
    ChatContactsC
  }
})
export default class extends Vue {
  protected contacts: Contact[] = [
    {
      index: 0,
      name: "John Doe",
      status: "Online",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      index: 1,
      name: "Moo Doe",
      status: "Away",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      index: 2,
      name: "Adam Jones",
      status: "Offline",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      index: 3,
      name: "Mizo Doe",
      status: "Busy",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      index: 4,
      name: "John Doe",
      status: "Online",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      index: 5,
      name: "Moo Doe",
      status: "Away",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      index: 6,
      name: "Adam Jones",
      status: "Offline",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      index: 7,
      name: "Mizo Doe",
      status: "Busy",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];
  protected chat: Chat = {
    john: {
      fullname: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      chat: [
        {
          timestamp: new Date("July 20, 2016 15:00:00").getTime(),
          message: "Lorem Ipsum is simply dummy text of"
        },
        {
          timestamp: new Date("July 20, 2016 15:00:08").getTime(),
          message: "the printing and typesetting industry."
        },
        {
          timestamp: new Date("July 20, 2016 15:21:15").getTime(),
          message: "Lorem Ipsum is simply dummy text of"
        }
      ]
    },
    Moo: {
      fullname: "Moo Doe",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      chat: [
        {
          timestamp: new Date("July 20, 2016 15:10:12").getTime(),
          message: "Lorem Ipsum has been the industry's"
        },
        {
          timestamp: new Date("July 20, 2016 16:14:59").getTime(),
          message: "Amazing!"
        },
        {
          timestamp: new Date("July 20, 2016 15:14:59").getTime(),
          message: "Sounds great!"
        }
      ]
    }
  };
}
</script>
