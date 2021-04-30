<template>
  <div>
    <h1>Contador</h1>
    <h2>{{value}}</h2>
    <button @click="setValue(1)">Acresentar</button>
    <button @click="setValue(-1)">Subtrair</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    initialValue: {
      type: Number
    }
  },
  data () {
    return {
      value: this.initialValue || 0
    };
  },
  methods: {
    setValue (delta: number) {
      this.value += delta;
    }
  }
});
</script>
