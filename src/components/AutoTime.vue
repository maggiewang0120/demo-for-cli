<template>
  <div>
    <label for="">Time</label>
    <div class="Clock">
    
      <input type="button" @click="autoClock" value="push">
      <label class="time" >{{clock}}</label>
    </div>
  </div>
</template>

<script>
import {store} from '../store/store.js'
export default {
  data(){
    return{
      clock: store.state.clock
    
  }
},
 
  methods: {
    autoClock(){
      setInterval(()=>{
        store.autoClock(this.clock)
      },5000);
    }
  },
}
</script>
<style lang="scss">
  
</style>