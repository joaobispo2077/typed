<template>
  <div id="app">
    Vue with TypeScript
    <Counter :initialValue="10" />
    <CounterClass :initialValue="20" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '../components/Counter.vue';
import CounterClass from '../components/CounterClass.vue';

@Component({
  components: {
    Counter, CounterClass
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
