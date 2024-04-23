<template>

  <div id="#main">

  </div>

</template>

<script>
export default {
  name: "TourView",
  data () {
    return {
      imgSrc: 'url(' + require('../public/img/xiZang.jpg') + ')'

    }
  },
  // 进入VUE时首先调用的钩子函数
  mounted () {
    // 添加背景图片
    document.body.style.backgroundSize = '100%'
    document.body.style.backgroundImage = this.imgSrc
  },
  // 离开VUE时调用的钩子函数
  beforeUnmount () {
    // 清除背景图片
    document.body.style.backgroundImage = ''
  }
}
</script>

<style scoped>
</style>