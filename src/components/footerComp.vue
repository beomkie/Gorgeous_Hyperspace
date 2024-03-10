<template>
  <footer class="footer-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="logo" class="logo-style">
    </div>
    <div class="info-container">
      <p class="info-text">Business No. 435-39-01205</p>
      <p class="info-text">Email: gorgeouswrks@gmail.com</p>
      <p class="info-text">copyright 2024.Gorgeous. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  color: #fff; 
  padding: 20px;
  margin-top: 200px;
}

.logo-container {
  margin-left: 150px;
}

.logo-style {
  width: 120px;
}

.info-container {
  flex: 2; 
  text-align: right;
  margin-right: 90px;
}

.info-text {
  margin: 5px 0; 
}

@media (max-width: 768px) {
  .logo-container {
  margin-left: 20px;
  }
  .logo-style {
  width: 90px;
  }
  .info-container {
  font-size: 10px;
  }
}
</style>
