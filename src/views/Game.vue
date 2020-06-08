<template>
  <div class="begin">
    <b-jumbotron v-if="hideJumbotron === false" v-on:click="incrementCounter()" bg-variant="info">
      <template v-slot:header>Halo tam</template>
      <hr>
      <p>
        Klik buat ngelanjutin
      </p>
      <p v-if="counter >= 1">
        Jadi kita, grup pisang, Ace, dan Deo nyiapin web buat nyelametin lu ultah
      </p>
      <p v-if="counter >= 2">
        biar lu ga bosen nihh ada beberapa game buat luu<br>
      </p>
      <p v-if="counter >= 2">
        Note: jangan ngecheat ya :)
        (click to continue)
      </p>
    </b-jumbotron>
    <div v-if="hideJumbotron === true">
      <ScoreCounter
        :numCorrect="numCorrect"
        :numTotal="numTotal"
        :increment="increment"
      />
      <QuestionBox
        :currentQuestion="questions[index]"
        :next="next"
        :increment="increment"
        v-if="numCorrect < 7"
      />
    </div>
    <b-container v-if="numCorrect < questions.length && numTotal === questions.length">
      <p>
        Yahhh, questionnya udah abis, dan lu perlu ngejawab semuanya bener biar bisa lanjut......
        <br>
        Solusi: klik button dibawah ini ato cheat :)
      </p>
      <b-button variant="warning" v-on:click="reset()">
        Reset
      </b-button>
    </b-container>
    <b-container>
      <b-card class="card" v-if="numCorrect >= 7">
        <div class="card-body" v-on:click="incrementCounter()">
          <h5 class="card-title">HORE LU MENANG!</h5>
          <audio autoplay controls >
            <source src="../assets/undertale.mp3" type="audio/mpeg">
          </audio>
          <b-card-text>Keren bet dahhh :)))</b-card-text>
          <b-card-text>Tunggu, kenapa ada boss music?</b-card-text>
          <b-card-text v-if="counter >= 4"> Hmm score counter juga masih ada </b-card-text>
          <b-card-text v-if="counter >= 5" class="bg-danger"> Last objective : correct answer harus 8 </b-card-text>
          <b-card-text v-if="counter >= 6"> Oke jadi gw boong soal lu udah menang..., lu harus jawab pertanyaan terakhir buat beresin gamenya, siap? </b-card-text>
          
          <b-jumbotron v-if="counter >= 7" bg-variant="primary">
            <h5 class="bold p-3">Siapa yg ultah hari ini (8 Juni)?</h5>
            <b-list-group>
              <b-list-group-item v-on:click="increment(true)">
                Yatama
              </b-list-group-item>
              <b-list-group-item>
                Deo
              </b-list-group-item>
              <b-list-group-item>
                Toby
              </b-list-group-item>
            </b-list-group>
          </b-jumbotron>
          
          <b-button v-if="numCorrect >= 8" to="/hidden" variant="warning">
            Go to the treasure chamber
          </b-button>
        </div>
      </b-card>
    </b-container>
    
  </div>
</template>

<script>
import questions from '../data/questions'
import QuestionBox from '../components/QuestionBox.vue'
import ScoreCounter from '../components/ScoreCounter.vue'

export default {
  components: {
    QuestionBox,
    ScoreCounter
  },
  data() {
    return {
      index: 0,
      questions: questions,
      numCorrect: 0,
      numTotal: 0,
      counter: 0,
      hideJumbotron: false
    }
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if(isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
    incrementCounter() {
      this.counter++;
      if(this.counter >= 3) {
        this.hideJumbotron = true
      }
    },
    reset() {
      this.index = 0;
      this.numCorrect = 0;
      this.numTotal = 0;
    }
  },
  mounted() {
    // console.log(this.question[0].answers.length)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
