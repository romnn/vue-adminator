<template>
  <navigation-bar-dropdown-element-c>
    <template v-slot:icon>
      <img class="w-3r bdrs-50p" :src="image" />
    </template>
    <template v-slot:content>
      <div>
        <div class="peers jc-sb fxw-nw mB-5">
          <router-link class="peers jc-sb fxw-nw mB-5" to="">
            <p class="fw-500 mB-0">{{ headline }}</p>
          </router-link>
          <div class="peer">
            <small class="fsz-xs">{{ status }}</small>
          </div>
        </div>
        <span class="fsz-sm">
          {{ subHeadline }}
        </span>
      </div>
    </template>
  </navigation-bar-dropdown-element-c>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavigationBarDropdownElementC from "../components/NavbarDropdownElement.vue";
import { AuthModule } from "../store/modules/auth";

@Component({
  name: "EmailDropdownElementC",
  components: {
    NavigationBarDropdownElementC
  }
})
export default class EmailDropdownElementC extends Vue {
  @Prop({ default: "../../assets/images/logo.png" }) private image!: string;
  @Prop({ default: "This is an email status" }) private status!: string;
  @Prop({ default: "This is an email headline" }) private headline!: string;
  @Prop({ default: "This is an email sub-headline" })
  private subHeadline!: string;

  protected open = false;

  logout() {
    AuthModule.logout();
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
</style>
