const { application } = require('express')
const express = require('express')
const Router = express.Router()
const homeschema = require('../model/homeschema')

Router.get('/', (req,res,next)=>{
    res.render('register',{ title:'', pass:'',email:''})

})

Router.post('/register', async(req,res)=>{
    try{
        const { name , email, pass , cpass}= req.body;
     

        if( pass === cpass){
          const userdata = homeschema({
            name , email, pass
          })

          userdata.save((err)=>{
            if(err){   console.log('err')}
            else{ res.render('register',{ title:' form is submitted', pass:'',email:''})
        
        }
          })

          const useremail = await homeschema.findOne({ email:email})
                 if( email === useremail.email){
                    res.render('register',{ title:'', pass:' ',email:'email is matching'})  
      }
        }else{
            res.render('register',{ title:'', pass:' pass not match',email:''})  
        }

    }catch(error){
        res.render('register',{ title:'hello', pass:'',email:''})

    }
})

//login form setup

Router.post('/login', (req,res)=>{
    const { email, pass}= req.body
    homeschema.findOne({email:email}, (err,result)=>{
       if(email === result.email && pass === result.pass){
        console.log(result.pass)
        res.render('dashbord',{ name:result.name})
       }else{
        console.log(err)
       }
    })
})

module.exports= Router