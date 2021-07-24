<template>
     <form v-on:submit.prevent="submit">
        <div class="class-date">
            <label for="date"> Date : </label>
            <input type="date" v-model="form.date" placeholder="Date...">
        </div>

        <div class="class-desc">
            <label for="description"> Description : </label>
            <input type="text" v-model="form.description" placeholder="description...">
        </div>

        <div class="class-inc">
            <label for="income"> Income : </label>
            <input type="number" v-model.number="form.income">
        </div>

        <div class="class-exp">
            <label for="expenses"> Expenses : </label>
            <input type="number" v-model.number="form.expenses">
        </div>

        <div class="buttonSub">
            <button @click="submitData"> Submit </button>
        </div>

     </form>
</template>

<script>
import DataIncExpStore from '@/store/dataIncExp'
export default {
    data() {
        return {
            form: {
                date: '',
                description:'',
                income: 0,
                expenses: 0,
                total: 0
            },

            newDate : '2021-07-09',
            totalIncome : 1050,
            totalExpenses: 0,
        }
    },
    methods: {
        clearForm() {
            this.form = {
                date: '',
                description:'',
                income: 0,
                expenses: 0
            }
        },
        submitData() {
            if (this.form.date !== this.newDate) {
                this.newDate = this.form.date
                this.totalIncome = 0
                this.totalExpenses = 0
            }
            
            this.totalIncome += this.form.income
            this.totalExpenses += this.form.expenses

            let payload = {
                date: this.form.date,
                description: this.form.description,
                income: this.form.income,
                expenses: this.form.expenses,
                total: this.totalIncome - this.totalExpenses,
            }

            console.log(payload)
            // todo เรียก action เพื่อเพิ่มข้อมูล
            DataIncExpStore.dispatch('submitData', payload)
            this.clearForm()
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');

.class-desc, .class-inc, .class-exp, .class-date {
    margin-top: 20px;
}

label {
    font-family: 'Nunito', sans-serif;
}
.class-date, .class-desc, .class-exp, .class-inc {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 20px;
}
.class-date{
    margin-right: 18em;
}

.class-desc {
    margin-right: 20em;
}

.class-exp {
    margin-right: 19em;
}

.class-inc {
    margin-right: 18em;
}

label {
    margin-right: 30px;
}

form input::placeholder {
    color: #AAA;
}

form input:first-of-type {
    border-radius: 8px 0px 0px 8px;
    height: 25px;
}

form input:last-of-type {
    border-radius: 0px 8px 8px 0px;
}

.buttonSub button {
    background-color: #e09846; 
    border: none;
    color: white;
    // padding: 12px 30px;
    padding: 15px 200px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    margin-top: 30px;
    margin-right: 200px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    border-radius: 8px;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

</style>