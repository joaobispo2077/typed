<template>
  <div>
    <h1>Contador - aClasse</h1>
    <h2>{{ value}}</h2>
        <button @click="setValue(1)">Acresentar</button>
    <button @click="setValue(-1)">Subtrair</button>
    {{getEvenOrOdd()}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CounterClass extends Vue {
  @Prop(Number) public readonly initialValue?: number;
  public value: number = this.initialValue || 0;

  public setValue (delta: number): void {
    this.value += delta;
  }

  public getEvenOrOdd (): string {
    if (this.value % 2 === 0) return 'É par';
    else return 'É impar';
  }
}

</script>
