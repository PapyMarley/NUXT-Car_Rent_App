<script setup lang="ts">

  const userList = await $fetch('https://jsonplaceholder.typicode.com/users');

</script>

<template>
  <div>
    <h3>UserList</h3>
    <ul>
      <li v-for="item in userList"  :key="item.id">
        {{ item.name }} 👃 {{item.username}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
