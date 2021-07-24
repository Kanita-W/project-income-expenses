<template>
<header>
  <h1>{{ msg }}</h1>
  <div class="imgHome">
    <img alt="Home logo" src="../assets/money-bag.png">
    <img alt="Home logo" src="../assets/piggy-bank.png">
    <img alt="Home logo" src="../assets/incomes.png">
  </div>
</header>
</template>

<script>
export default {
    name: 'Header',
    props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  font: menu;
  align-items: center;
  padding: 15px 30px;
  background-color: #313131;
  border-bottom: 5px solid #FFCE00;
  border-radius: 12px;
}

header h1 {
  color: #EEE;
  font-size: 28px;
}


</style>