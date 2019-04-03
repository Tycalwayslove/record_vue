<template>
  <div>
    <h1>Here is something interesting</h1>
    <h2>And this is a entrance </h2>

    <ul class="card-list">
      <li class='card-item'>
        <p class="title">我是入口一</p>
        <p class="msg">我是入口描述一</p>
      </li>
      <li class='card-item'>
        <p class="title">我是入口一</p>
        <p class="msg">我是入口描述一</p>
      </li>
      <li class='card-item'>
        <p class="title">我是入口一</p>
        <p class="msg">我是入口描述一</p>
      </li>
      <li class='card-item'>
        <p class="title">我是入口一</p>
        <p class="msg">我是入口描述一</p>
      </li>

    </ul>

  </div>
</template>
<style lang="scss" scoped>
h1 {
  text-align: left;
  word-break: break-all;
}

.card-list {
  display: flex;
  margin-top: 30vh;
  flex-wrap: wrap;
  width: 100vw;
  .card-item {
    width: 50vw;
    padding: 30px 0;
    background-color: #ccc;
  }
}
</style>
