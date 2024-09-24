<template>
  <div class="about">
    <h1 class="green test">Loadash</h1>
    <!--chunk-->
    <div id="chunk">
      <p class="_title">[chunk]</p>
      <span class="value">{{ chunk.before }}</span> <span> _.chunk </span>
      <input type="number" class="_input" v-model="chunk.target" />
      <span> to </span>
      <span class="value"> {{ chunk.after }}</span>
    </div>
    <!--compact-->
    <div id="compact">
      <p class="_title">[compact]</p>
      <span class="value">{{ compact.before }}</span> <span> _.compact </span>
      <span> to </span>
      <span class="value"> {{ compact.after }}</span>
    </div>
    <!--difference-->
    <div id="difference">
      <p class="_title">[difference]</p>
      <input
        class="_input"
        @change="(v) => (difference.beforeA = JSON.parse(`[${v.target.value}]`))"
      />
      <span> _.difference to </span>
      <input
        class="_input"
        @change="(v) => (difference.beforeB = JSON.parse(`[${v.target.value}]`))"
      />
      <span> = </span>
      <span class="value"> {{ difference.after }}</span>
    </div>
    <!--random-->
    <div id="random">
      <p class="_title">[random]</p>
      <span class="value" style="width: 100px"> {{ random.data }}</span>
      <input
        type="checkbox"
        value="Float"
        @change="
          (v) => {
            console.log(v.target.checked)
            random.float = v.target.checked
          }
        "
      />Float
      <button @click="testRandom">Random</button>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'

//chunk----------------------------------------------
const chunk = ref({
  before: [1, 2, 3, 4, 5],
  target: 1,
  after: computed(() => {
    return _.chunk(chunk.value.before, chunk.value.target)
  })
})

//compact----------------------------------------------
const compact = ref({
  before: [1, 0, '', false, null, 2, 3],
  after: computed(() => {
    return _.compact(chunk.value.before)
  })
})

//difference----------------------------------------------
const difference = ref({
  inspect: [1, 2, 3],
  exclude: [4, 2, 3],
  after: computed(() => {
    return _.difference(difference.value.beforeA, difference.value.beforeB)
  })
})
//random----------------------------------------------
const random = ref({
  data: 5,
  float: false
})
const testRandom = () => {
  random.value.data = _.random(100, random.value.float)
}
onMounted(() => {})
</script>
<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.value {
  background-color: #333333;
}
._title {
  font-weight: bolder;
  background-color: #005a4d;
}

._input {
  width: 50px;
}
</style>
