<template>
  <navigation-bar-dropdown-element-c>
    <template v-slot:icon>
      <img class="w-3r bdrs-50p" :src="image" />
    </template>
    <template v-slot:content>
      <span>
        <router-link class="fw-500" to="">
          {{ headline }}
        </router-link>
      </span>
      <p class="m-0">
        <small class="fsz-xs">{{ subHeadline }}</small>
      </p>
    </template>
  </navigation-bar-dropdown-element-c>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavigationBarDropdownElementC from "./NavbarDropdownElement.vue";

@Component({
  name: "NotificationDropdownElementC",
  components: {
    NavigationBarDropdownElementC
  }
})
export default class NotificationDropdownElementC extends Vue {
  @Prop({ default: "../../assets/images/logo.png" }) private image!: string;
  @Prop({ default: "This is a notification headline!" })
  private headline!: string;
  @Prop({ default: "This is a notification sub-headline!" })
  private subHeadline!: string;
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
