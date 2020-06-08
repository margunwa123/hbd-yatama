<template>
  <div>
    <b-card
      class="mt-3 border border-dark" 
      bg-variant="light"
      v-for="(wish, index) in wishes" 
      :key="index" 
    >
      <h5> {{ wish.from }} </h5>
      <b-card-text >{{wish.wish}}</b-card-text>
      <b-card-text class="font-italic text-right">{{wish.note}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
import wishes from '../data/wishes'

export default {
  data() {
    return {
      wishes: wishes,
      index: 0
    }
  },
  methods: {
    getVariant() {
      this.index++;
      return this.variants[this.index % this.variants.length]
    }
  },
}
</script>

<style>
</style>