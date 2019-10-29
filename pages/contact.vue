<template>
  <b-container>
       <h1 id='title' class="my-5" style="font-size: 75px" ><b>Contact</b></h1>
       <b-row>
           <b-col>Email: ismaelomermohamed@gmail.com</b-col><b-col>Linkedin: <a href='https://www.linkedin.com/in/ismael-mohamed-065b19139/'>https://www.linkedin.com/in/ismael-mohamed-065b19139/</a> </b-col><b-col>Github: <a href='https://gitlab.com/ismael101'>https://gitlab.com/ismael101</a></b-col>
       </b-row>
       <hr/>
       <b-alert variant="danger" v-model='showFailure' dismissible>
           <p>Email Failed</p>
           </b-alert>
       <b-alert variant="success" v-model='showSuccess' dismissible>
           <p>Email Delivered</p>
           </b-alert>
       <b-form @submit.prevent='email'>
        <b-form-group>
            <b-form-input placeholder='Enter Your Name' v-model='form.name' required class="my-1 mt-4">

            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input placeholder='Enter Your Email' type='email' v-model='form.email' required class="my-1">

            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input  placeholder='Enter Subject' v-model='form.subject' required class="my-1">

            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-textarea  placeholder='Message' v-model='form.message' required class="my-1" rows="8">

            </b-form-textarea>
        </b-form-group>
        <b-button variant='primary' type='submit'>Submit</b-button>
       </b-form>
  </b-container>
</template>

<script>
export default {
     data(){
        return{
            showFailure:false,
            showSuccess:false,
            form:{
                message:'',
                email:'',
                subject:'',
                name:'',
            },
        }
    },
    methods:{
        async email(){
            try{
                const res = await this.$axios.$post('http://localhost:5000/email',{from:this.form.email,subject:this.form.subject,name:this.form.name,message:this.form.message})
                console.log(res)
                this.form.message = ''
                this.form.email = ''
                this.form.subject = ''
                this.form.name = ''
                this.showSuccess = true      
            }catch(err){
                this.form.message = ''
                this.form.email = ''
                this.form.subject = ''
                this.form.name = ''
                this.showFailure = true 
            } 
        }
    }
}
</script>

<style>

</style>