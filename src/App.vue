<template>
  <div id="app">
    <router-view/>
  </div> 
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body.vsc-initialized {
    background-color: rgb(221, 213, 203);
    background-image: url("https://image.flaticon.com/icons/png/512/2916/2916115.png");
    background-repeat: no-repeat;
    background-position: 1000px;
    background-attachment: scroll;
    background-size: 150px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>