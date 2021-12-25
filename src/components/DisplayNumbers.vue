<template>
  <div>
    <h2>{{ storeState }}</h2>
    <h2>{{one}}</h2>
    <h2>{{two}}</h2>
    <h2>{{three}}</h2>
  </div>
</template>

<script >
import { mapState } from 'vuex'
export default {
  data() {
    return {
      //叫vuex裡的getters執行
      storeState: this.$store.getters.sortedNumbers
    }
  },
 computed: {
   //spread operator將陣列中的值各別取出
   ...mapState(['numbers','one','two','three']),
 }
}

</script>
<style lang="scss">
  h2{
    color: white;
    margin:0;
  }
</style>