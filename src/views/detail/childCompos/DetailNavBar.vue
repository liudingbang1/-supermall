<template>
  <!--导航栏-->
  <nav-bar>
    <div slot="left" class="back" @click="backClick()">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" @click="titleClick(index)" class="title-item"
           :class="{active:index==currentIndex}">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  props: {

  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    }, backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}

.active {
  color: red;
}

.back {
  margin: 5px;
}
</style>
