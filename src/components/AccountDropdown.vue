<template>
  <li class="dropdown">
    <!-- User account dropdown toggle -->
    <a
      class="dropdown-toggle no-after peers fxw-nw ai-c"
      data-toggle="dropdown"
    >
      <div class="peer mR-10 user-icon-container">
        <!--<img class="w-2r bdrs-50p" :src="picture" alt="" />-->
        <i class="icon-user mR-10"></i>
      </div>
      <div class="peer user-email-container">
        <span class="fsz-sm">{{ email }}</span>
      </div>
    </a>
    <!-- Dropdown menu items -->
    <ul class="dropdown-menu fsz-sm">
      <!-- Profile page -->
      <account-dropdown-element-c title="Profile">
        <i class="icon-user mR-10"></i>
      </account-dropdown-element-c>
      <!-- Settings page -->
      <account-dropdown-element-c title="Settings">
        <i class="icon-settings mR-10"></i>
      </account-dropdown-element-c>
      <!-- Notifications page -->
      <account-dropdown-element-c title="Notifications">
        <i class="icon-email mR-10"></i>
      </account-dropdown-element-c>
      <li role="separator" class="divider"></li>
      <!-- Logout page -->
      <div @click.prevent="logout()">
        <account-dropdown-element-c title="Logout">
          <i class="icon-power-off mR-10"></i>
        </account-dropdown-element-c>
      </div>
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AccountDropdownElementC from "../components/AccountDropdownElement.vue";
import { AuthModule } from "../store/modules/auth";

@Component({
  name: "AccountDropdownC",
  components: {
    AccountDropdownElementC
  }
})
export default class AccountDropdownC extends Vue {
  @Prop({ default: "Account Dropdown" }) private username!: string;
  @Prop() private email?: string;
  @Prop() private picture?: string;

  protected open = false;

  logout() {
    AuthModule.logout();
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';

.dropdown
  position: relative
  display: block
  cursor: pointer
  margin-left: 15px

  a
    transition: all 0.1s ease-in-out

  .user-email-container
    max-width: 120px
    // overflow: hidden
    // display: block
    // word-break: break-all
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    text-align: center

  .user-icon-container
    .icon-user
      padding: 10px
      border-radius: 50%
      background-color: #b3ccff
      color: white

  .dropdown-menu
    +theme(background-color, bgc-navbar)
    line-height: 35px
    margin-left: -50px
    li
      padding: 2px 12px
      &:hover
        +theme-color-diff(background-color, bgc-navbar, 10)
</style>
