<template>
  <div>
    <label for="number"></label>
    <input
      type="text"
      name="number"
      placeholder="Enter a number"
      v-model="number"
    />
    <button @click="addNumber">Add number</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      number: 0
    }
  },
  methods: {
    addNumber() {
      // this.$store.dispatch('addNumber')
      this.$store.commit('ADD_NUMBER',parseInt(this.number))
      // 執行store裡的addNumber(帶payload)
    }
  },
  computed: {
  ...mapState(['numbers']),
  }
}
</script>