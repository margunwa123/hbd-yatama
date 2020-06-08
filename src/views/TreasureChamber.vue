<template>
  <b-card
    title="Kami grup pisang, ace, dan deo mengucapkan..."
    class="mb-2"
  >
  <div class="border-thick">
    <img class="card-img-top w-50" src="@/assets/yatama-sketch.png" alt="Responsive image">
  </div>
  <p class="text-left"><i>art by krisna</i></p>
    <h1>
      HAPPY BIRTHDAY YATAMA
    </h1>
    <b-card-text>
      Semoga lu diberkati, sehat selalu, bisa lulus tepat waktu, makin kurus,
      makin sayang ortu, langgeng terus, bisa dapet kerja nanti, dan lain lain,
      yang terbaik buat luuu... &#128512;
    </b-card-text>

    <b-button to="/gallery" variant="warning">Gallery</b-button>
    <b-button to="/" variant="danger">Home</b-button>
    <b-button to="/wishes" variant="info">Wishes</b-button>
  </b-card>
</template>

<script>
export default {

}
</script>

<style>
.border-thick {
  border: 3px solid yellow;
}
</style>