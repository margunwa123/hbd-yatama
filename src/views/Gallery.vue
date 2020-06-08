<template>
  <b-container fluid class="p-4 bg-dark">
    <b-row 
        v-for="i in Math.ceil(images.length/3)"
        :key="i">
      <b-col>
        <b-img v-if="images[3 * (i - 1)]" thumbnail fluid :src="images[3 * (i - 1)]" alt="Foto aib yatama"></b-img>
      </b-col>
      <b-col>
        <b-img v-if="images[3 * (i - 1) + 1]" thumbnail fluid :src="images[3 * (i - 1) + 1]" alt="Foto aib yatama"></b-img>
      </b-col>
      <b-col>
        <b-img v-if="images[3 * (i - 1) + 2]" thumbnail fluid :src="images[3 * (i - 1) + 2]" alt="Foto aib yatama"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    importAll(r) {
      return r.keys().map(r);
    }
  },
  data() {
    return {
      images: this.importAll(require.context('@/assets/aib', false, /\.(png|jpe?g|svg)$/))      
    }
  },
}
</script>

<style>

</style>