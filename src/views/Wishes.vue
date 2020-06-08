<template>
  <div>
    <b-card
      class="mt-3" 
      :bg-variant="getVariant()" 
      :title="wish.from" 
      v-for="(wish, index) in wishes" 
      :key="index" 
    >
      <b-card-text v-html="wish.wish">
      </b-card-text>
      <b-card-text v-html="wish.note" class="font-italic text-right"></b-card-text>
    </b-card>
  </div>
</template>

<script>
import wishes from '../data/wishes'

export default {
  data() {
    return {
      wishes: wishes,
      variants: ['info','danger','warning','light'],
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