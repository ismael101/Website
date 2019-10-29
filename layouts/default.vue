<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <nuxt-link to='/'><b-navbar-brand>Ismael Farah</b-navbar-brand></nuxt-link>
      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>
        <b-collapse id='nav-collapse' is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><b-link style="color:white;" to='/projects'>Projects</b-link></b-nav-item>
        <b-nav-item><b-link style='color:white;' to='/contact'>Contact</b-link></b-nav-item>
      </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    <nuxt />
  </div>
</template>

<style>

</style>
