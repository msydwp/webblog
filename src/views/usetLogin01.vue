<template>

  <form id="loginForm" >
    <label for="username">用户:</label>
    <input type="text" id="username" name="username" required><br><br>

    <label for="password">密码:</label>
    <input type="password" id="password" name="password" required><br><br>

    <button type="submit" onclick="loginUser()">登陆</button>
  </form>

</template>

<script>
export default {
  name: "usetLogin01"
}
</script>

<style scoped>
body{
  /*width: 1920px;*/
  /*margin: 0px auto;*/

}

#loginForm{
  width: 50%;
  border: 1px solid red;
  text-align: center;
  margin: 200px auto;
  padding: 100px 0px;
  /*display: flex;*/
  /*justify-content: center;*/
}


</style>