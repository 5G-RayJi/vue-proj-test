import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: ref(0)
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2
    },
    tripleCount(): number {
      return this.count * 3
    }
  },
  //Unlike getters, actions can be asynchronous, you can await inside of actions any API call or even other actions!
  actions: {
    ADD() {
      this.count++
    },
    RESET() {
      this.count = 0
    }
  }
})
