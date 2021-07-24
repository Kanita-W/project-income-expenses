<template>
  <div class="home">
    <Header msg="Revenue Accounts And Expenses Accounts"/>
    <Input />
    <DataCreateTable />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Input from '@/components/Input.vue'
import DataCreateTable from '@/components/DataCreateTable.vue'
export default {
  name: 'home',
  components: {
    Header,
    Input,
    DataCreateTable,
  },
}
</script>
