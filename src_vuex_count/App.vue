<template>
<div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="ifOdd">{{$store.state.count}}</button>
  <button @click="async">{{$store.state.count}}</button>
</div>
</template>

<script type="text/ecmascript-6">
export default {

  methods:{
    increment(){
      this.$store.dispatch('increment')
    },
     decrement(){
      this.$store.dispatch('decrement')
    },
    ifOdd(){
      this.$store.dispatch('ifOdd')
    },
    async(){
      this.$store.dispatch('async')
    }
  }
}
</script>

<style scoped>


</style>

