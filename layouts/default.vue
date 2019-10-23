<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <nuxt-link to='/'><b-navbar-brand>Ismael Mohamed</b-navbar-brand></nuxt-link>
      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>
        <b-collapse id='nav-collapse' is-nav>
      <b-navbar-nav>
        <b-nav-item><nuxt-link to='/projects'>Projects</nuxt-link></b-nav-item>
        <b-nav-item>Contact</b-nav-item>
      </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    <nuxt />
  </div>
</template>

<style>

</style>
