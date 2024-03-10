<template>
  <div>
    <div>
      <p class="start-style">Make small improvements <br>lead to progress in the world.</p>
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
    },
  }

}
</script>

<style scoped>
.start-style {
  font-size: 60px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  margin-top: 120px;
}
.earth-style {
  width: 200px;
  margin-top: 30px;
}
.title-style {
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin-top: 200px;
}
.brand-style {
  width: 170px;
  margin: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.brand-style :hover {
  transform: scale(1.1);
  filter: brightness(0.8);
}
@media (max-width: 768px) {
  .start-style {
  font-size: 40px;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  margin-top: 120px;
  margin: 20px;
}  
}
</style>