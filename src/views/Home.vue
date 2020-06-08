<template>
  <div>
    <b-container class="home">
      <img class="home-image" src="@/assets/tenor.gif" alt="Responsive image">
      <b-container class="home-image-text">
        <h1>HBD Yatama!</h1>
        <b-button variant="info" to="/game">Play the game!</b-button>
      </b-container>
      <b-container class="p-5">
        <h5 class="mt-0 mb-1">From:</h5>
        <ul style="none">
          <b-media class="mb-0" v-for="(friend, index) in friends" :key="index">
            {{friend}}
          </b-media>
        </ul>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: ['Mario', 'Ci Cindy', 'Stella', 'Krisna', 'Helen', 'Toby', 'Sen sen', 'Ace', 'Deo']
    }
  },
}
</script>