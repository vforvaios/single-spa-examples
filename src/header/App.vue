
<script>
  import e from '../eventBusEmitter';

  export default {
      name: "App",
      data() {
        return {
          message: 'Blank'
        }
      },
      mounted() {
        e.on('toVue', message => this.message = message.text)
      }
  }
</script>

<template>
  <span id="app1">
    This is a VueJS app!
    {{message}}
  </span>
</template>

<style>
  #app1 {
    font-family: 'Times New Roman';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 50px;
  }
</style>