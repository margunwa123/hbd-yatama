<template>
  <b-container class="border flex-column fluid">
    <b-row>
      <b-col>
        <div>
          <p class="pt-3">
            Total bener : {{ numCorrect }} / {{ numTotal }}
          </p>
        </div>
      </b-col>
      <b-col>
        <b-button href="#" 
          class="mt-2" 
          variant="danger" 
          v-on:click="increment(1)" 
          :disabled="numCorrect >= 7">
          Cheat!
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    numCorrect: Object,
    numTotal: Object,
    increment: Function
  }
}
</script>

<style>

</style>