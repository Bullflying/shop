<template>
  <div id="app">
    <custom-header></custom-header>
    <div id="main"></div>
    <router-view/>
  </div>
</template>

<script>
//import axios from 'axios'
import CustomHeader from '@/components/header/header'
export default {
  name: 'App',
  components:{CustomHeader},
}
</script>

<style>

</style>
