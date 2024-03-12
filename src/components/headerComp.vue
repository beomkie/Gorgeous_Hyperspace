<template>
  <div>
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand>
        <img src="@/assets/logo.png" alt="logo" class="logo-style" @click="gotoHome">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="toggle-style"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-style">
          <b-nav-item href="#" @click="navigateTo('about')" class="button-style">About</b-nav-item>
          <b-nav-item href="#" @click="navigateTo('brand')" class="button-style">Brand</b-nav-item>
          <b-nav-item href="#" @click="navigateTo('team')" class="button-style">Team</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    gotoHome() {
      this.$router.push('/');
    },
    navigateTo(page) {
      this.$router.push({name: page});
      console.log('Navigating to', page);
    }
  }
};
</script>

<style scoped>
.logo-style {
  width: 200px; 
  cursor: pointer;
  margin-left: 50px;
  margin-top: -10px;
}
.nav-style {
  margin-left: 800px;
  margin-top: -30px;
}

@media (max-width: 768px) {
  .logo-style {
    width: 120px;
    margin-left: 20px; 
  }
  .nav-style {
    margin-left: auto; 
    margin-right: 0px;
    margin-top: -10px; 
  }
  .toggle-style {
    margin-right: 20px;
  }
}
.button-style {
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
}
</style>
