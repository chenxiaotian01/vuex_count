<template>
<div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="ifOdd">{{count}}</button>
  <button @click="async">{{count}}</button>
  <p>2倍的count{{currentCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import {mmapActions,mapGetters,mapState,mapMutations, mapActions} from 'vuex'

export default {
  methods:{
    ...mapMutations(['increment','decrement']),
    ...mapActions(['ifOdd','async'])
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['currentCount'])
  }
}
</script>

<style scoped>


</style>
