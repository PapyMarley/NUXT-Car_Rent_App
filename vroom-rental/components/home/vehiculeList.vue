<script setup lang="ts">

  const vehicleList = await $fetch('/api/vehicles');



</script>

<template>
  <div>
    <h3>Liste des Véhicules</h3>
    <div>
      <ul>
        <li v-for="item in vehicleList" :key="item.model">
          <img :src="'https://picsum.photos/300/200?random' + item.registration" alt="osef">{{item.model}} | {{ item.brand}} =><button><a href="/"></a>VOIR LE VEHICULE</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>