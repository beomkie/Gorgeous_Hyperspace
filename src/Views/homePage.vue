<template>
  <div>
    <div>
      <p class="start-style">Welcome to Gorgeous</p>
    </div>
    <div>
      <img src="@/assets/earth.jpg" alt="Earth Photo" class="earth-style">
    </div>
    <div>
      <p class="title-style">Our Brand</p>
        <img src="@/assets/SHiFT3_logo_white.png" alt="SHiFT3 Logo" class="brand-style" @click="gotoShift3">
        <img src="@/assets/4rooms.png" alt="4Rooms Logo" class="brand-style" @click="goto4rooms">
        <img src="@/assets/coming_soon.jpg" alt="Coming Soon" class="brand-style">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoShift3() {
      this.$router.push({name: 'SHIFT3'});
    },
    goto4rooms() {
      this.$router.push({name: '4Rooms'});
    }
  }

}
</script>

<style scoped>
.start-style {
  font-size: 30px;
  font-weight: 600;
  color: white;
}
.earth-style {
  width: 350px;
  margin-top: 80px;
}
.title-style {
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin-top: 90px;
}
.brand-style {
  width: 170px;
  margin: 50px;
  cursor: pointer;
}
</style>