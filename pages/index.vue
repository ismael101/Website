<template>
 <div>
   <b-jumbotron id='jumbotron' bg-variant='dark' text-variant='white' fluid>
     <b-container>
      <div>
      <h1 id='title' class="my-2" style="font-size: 75px" >Hi, I'm <b>Ismael Farah</b></h1>
      <h3 class='my-2'>I am a <b>Fullstack Software Engineer</b></h3>
      <hr/>
      </div>
     </b-container>
   </b-jumbotron> 
   <b-container>
     <h1 class='mt-3' style='font-size: 50px'><b>Skills</b></h1>
     <hr/>
     <b-row>
       <b-col>
     <b-card header='Frontend' bg-variant='primary' text-variant='white' class='my-3 mx-3'>
       <b-card-text><b>React js</b></b-card-text>
       <b-card-text><b>Vue js / Nuxt js </b></b-card-text>
     </b-card>
       </b-col>
       <b-col>
      <b-card header='Backend' bg-variant='info' text-variant='white' class='my-3 mx-3'>
     <b-card-text><b>Node js / Express js</b></b-card-text>
     <b-card-text><b>Python / Django</b></b-card-text>
    </b-card>
       </b-col>
       <div class='w-100'></div>
       <b-col>
   <b-card header='Database' bg-variant='dark' text-variant='white' class='my-3 mx-3'>
     <b-card-text><b>MySQL</b></b-card-text>
     <b-card-text><b>PostgreSQL</b></b-card-text>
     <b-card-text><b>Mongo DB</b></b-card-text>
   </b-card>
       </b-col>
       <b-col>
   <b-card header='DevOps' bg-variant='warning' text-variant='white' class='my-3 mx-3'>
     <b-card-text><b>Linux</b></b-card-text>
     <b-card-text><b>Docker</b></b-card-text>
    <b-card-text><b>Git</b></b-card-text>
   </b-card>
       </b-col>
     </b-row>
   </b-container>
  
   <div>
   </div>
 </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>

</style>
