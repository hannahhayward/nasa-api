<template>
  <div class="col-10 m-auto">
    <div class="card">
      <div class="card-header">
        <img :src="picture.url" />
      </div>
      <div class="card-body text-center">
        <p class="text-left m-0">
          {{ picture.title }}
        </p>
        <p>
          {{ picture.description }}
        </p>
        <div class="text-right">
          <button class="btn btn-primary"> add to favorites </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      picture: computed(() => AppState.picture)
    }
  }
}
</script>

<style scoped>
</style>
