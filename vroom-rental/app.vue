<template>
  <div>
    <a-config-provider
        :theme="{
		      token: $options.customTheme
		    }">

      <!-- Just a test using our theme value -->
      <div>
      <h1>VROOM-RENTAL</h1>
      <h2>LA référence des locations de véhicules.</h2>
      </div>
      <div>
      <NuxtPage />
      </div>

    </a-config-provider>
  </div>
</template>

<script>

import { customTheme } from "./plugins/theme.js"

export default {
  customTheme
}

</script>

<style>



</style>
