<template>
  <div>
      <table>
          <thead>
              <tr>
                  <th class="number">Number</th>
                  <th class="date">Date</th>
                  <th class="desc">Description</th>
                  <th class="inc">Income</th>
                  <th class="exp">Expenses</th>
                  <th class="total">Total</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(inc, index) in dataIncExp" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ inc.date }}</td>
                  <td class="descc">{{ inc.description }}</td>
                  <td>{{ inc.income }}</td>
                  <td>{{ inc.expenses }}</td>
                  <td>{{ inc.total }}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import DataIncExpStore from '@/store/dataIncExp'
export default {
    data() {
        return {
            dataIncExp: [],
        }
    },
    created(){
        this.fetchdataIncExp()
    },
    methods: {
        async fetchdataIncExp() {
            //ใช้ dis เรียก action จาก Store ด้วยชื่อ Store.dis("name action")
            await DataIncExpStore.dispatch('fetchdataIncExp')
            this.dataIncExp = DataIncExpStore.getters.dataIncExp
        },
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');

table, th, td{
    border: 2px solid rgb(231, 222, 222);
    // border-bottom: 1px solid rgb(138, 134, 134);
    padding: 10px;
}

td {
    // font-family: sans-serif;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
}

.number, .date, .desc, .inc, .exp, .total {
    height: 40px;
}

.descc {
    text-align: left;
}

table {
    width: 85%;
    border-collapse: collapse;
    margin-top: 30px;
    margin-left: 85px;
    background-color: rgb(248, 217, 170);
    border-radius: 8px;
}

table .number, .date, .desc {
    background-color: silver;
}

table .inc {
    background-color: rgb(118, 196, 152);
}

table .exp {
    background-color: rgb(228, 165, 165);
}

table .total {
    background-color: rgb(177, 192, 236);
}

// font thai
th {
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    font-display: swap;

    font-family: 'Barlow', sans-serif;
}

.inc {
    color: rgb(16, 105, 16);
}

.exp {
    color: red;
}

.total {
    color: royalblue;
}
</style>