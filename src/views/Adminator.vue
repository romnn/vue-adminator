<template>
  <div class="app" :class="{ 'is-collapsed': isCollapsed }">
    <!-- Sidebar -->
    <sidebar-c title="Vue Adminator" />

    <div class="page-container">
      <!-- Top Navigation bar -->
      <navigation-bar-c />

      <!-- App Screen Content -->
      <main class="main-content">
        <transition id="mainContent" name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>

      <!-- App Screen Footer -->
      <footer-c>
        <span id="footer">
          MIT &copy; by
          <a href="https://github.com/romnnn">romnn</a>
          based on
          <a href="https://colorlib.com" title="Colorlib"
            >Colorlib <span class="icon icon-new-window"></span
          ></a>
        </span>
      </footer-c>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SidebarC from "../components/Sidebar.vue";
import FooterC from "../components/Footer.vue";
import NavigationBarC from "../components/Navbar.vue";
import { AppModule } from "../store/modules/app";

@Component({
  name: "Adminator",
  components: {
    SidebarC,
    FooterC,
    NavigationBarC
  }
})
export default class Adminator extends Vue {
  get isCollapsed() {
    return AppModule.isCollapsed;
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.app
  height: 100%

#footer
  z-index: 1000
  line-height: calc(#{$footer-height} - 1px)
  vertical-align: middle
  display: inline-block

.page-container
  height: 100%

.main-content
  position: relative
  overflow-x: hidden
  +theme(background-color, bgc-content)
</style>
