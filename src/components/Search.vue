<template>
  <form @submit.prevent="getPictures">
    <div>
      <input type="text" class="form-control" placeholder="search a date yyyy-mm-dd" v-model="state.query">
      <button class="btn btn-info">search</button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { picturesService } from '../services/PicturesService'
export default {
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      getPictures() {
        AppState.currentQuery = state.query
        picturesService.getPictures()
        state.query = ''
      }
    }
  }

}
</script>
