<template>
  <div id="app">
    <router-view name='default'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='sass'>
@import "node_modules/bulma/sass/utilities/_all"
@import "node_modules/bulma/sass/base/_all"
@import "node_modules/bulma/sass/elements/_all"
@import "node_modules/bulma/sass/components/_all"
@import "node_modules/bulma/sass/grid/_all"
@import "node_modules/bulma/sass/layout/_all"
</style>
