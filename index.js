
const express = require('express')
var cors = require('cors')
const { Vonage } = require('@vonage/server-sdk')
const app = express()


const vonage = new Vonage({
  apiKey: process.env.apiKey,
  apiSecret:process.env.apiSecret
})

// Vonage's SMS API

app.use(cors())


app.get('/sms',(req,res,next)=>{


    

    const from = "Vonage APIs"
    const to = String(req.headers.number)
    const text = req.headers.msg

    
    async function sendSMS() {
        try {
          let resp =  await vonage.sms.send({to, from, text})
          console.log('Message sent successfully! - ',resp)
          res.send({resp})
            
        } catch (error) {
            console.log('There was an error sending the messages. ',error); 
            res.send({error})
            
        }
    }
    
    sendSMS();
})

app.get('/')



// Callbacks
// function callbacks1(value){
//     let p = new Promise(function(resolve){
//         resolve("Hi Rohan")
//     })
//     return p
// }

// function main(){
//     callbacks1().then((value)=>{
//         console.log(value)
//     })
// }

// main()


const port = 3000
console.log(`Listening to http://localhost:${port}/`)
app.listen(port)


