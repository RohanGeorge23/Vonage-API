<template>
  <div>
    
    <div class="main">
      <div style="text-align: center; color: aliceblue;">Send a SMS using Vonage's API</div>
      <div class="form">
        <input type="text" v-model="number" placeholder="Enter Phone Number" style="text-align: center; height: 40px;" >
        <input type="text" v-model="msg" placeholder="Enter Message" style="text-align: center; height: 200px; width: 500px;"/>
        <button @click="handleClick()" style="height: 50px; background-color: aquamarine;">Send SMS</button>

      </div>
    </div>
  </div>
 
</template> 

<script>
import axios from 'axios'

  export default{
      data() {
        return {
          number: '',
          msg:''
        }
    },
    methods:{ 
      async handleClick(){
        console.log('result ',this.number,this.msg)
        try {
          let res = await axios.get('http://localhost:3000/sms', {headers:{'number' :this.number,'msg' :this.msg}})
          console.log('resultttttttttttt ',res )
          alert('SMS sent successfully!')
        } catch (error) {

          console.log('errorrrrr', error)
          alert("Error processing request")
        }

      }
    }
  }

</script>

<style scoped>

.form{
  margin: 3rem;
  display: flex;
  flex-direction: column;
}
.main{
  font-size: larger;
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  width: 100vw  ;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
