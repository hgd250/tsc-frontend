<template>
  <div id="app">
    <form @submit.prevent="submitPost">
      <input type="text" name="name">
      <input type="password" name="pass">
      <div>
        <input type="checkbox" name="ischeckbox">
        <input type="radio" name="isradio">
        <div>
          <input type="mail" name="mail">
          <div>
            <input type="file" name="img">
          </div>
        </div>
      </div>
      <input type="submit" value="提交">
    </form>
  </div>
</template>

