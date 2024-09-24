<template>
  <div class="about">
    <h1 class="green">Pinia</h1>
    <p>count: {{ counterStore.count }}</p>
    <p>double: {{ counterStore.doubleCount }}</p>
    <p>triple: {{ counterStore.tripleCount }}</p>
    <button @click="counterStore.ADD">Add</button>
    <button @click="counterStore.RESET">Reset</button>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counterStore'

const counterStore = useCounterStore()
//default value
// counterStore.count = 10
const unsubscribe = counterStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError // hook if the action throws or rejects
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`)
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`)
    })
  }
)
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
