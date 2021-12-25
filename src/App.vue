  <template>
    <body class="body">
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <!-- <router-link :to="{name:'Home'}">Home</router-link> 也可以寫這樣-->
          <router-link to="/about">About</router-link>
           <!-- <router-link :to="{name:'About'}">About</router-link> -->
           
          <!--<router-link>設定路由像是a link一樣的hyperlink-->
          <DisplayNumbers class="wow"></DisplayNumbers>
          <AddNumbers></AddNumbers>
          <AutoTime></AutoTime>
        </div>
        <router-view/><!--<router-view>決定現在要顯示哪一個 在router那裡的index設定-->

      </div>
    </body>
  </template>

<script>
import AddNumbers from './components/AddNumbers.vue'
import DisplayNumbers from './components/DisplayNumbers.vue'
import AutoTime from './components/AutoTime.vue'

export default {
  name:'App', 
  components: {
    AddNumbers,
    DisplayNumbers,
    AutoTime
  }
}
</script>

<style lang="scss">
  .wow{
    border:1px solid white;
  }
  body{
    background-color: rgb(168, 175, 185);
    margin:0 ;
  }
</style>
