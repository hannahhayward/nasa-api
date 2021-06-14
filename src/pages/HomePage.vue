<template>
  <div class="containter-fluid">
    <div class="row">
      <div class="col-10 m-auto">
        <Search />
      </div>
    </div>
    <div class="row">
      <!-- <PictureList v-for="p in pictures" :key="p.title" :picture="p" /> -->
      <PictureDetails />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      pictures: computed(() => AppState.picture)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  user-select: none;
  > img {
    height: 200px;
    width: 200px;
  }
}
</style>
