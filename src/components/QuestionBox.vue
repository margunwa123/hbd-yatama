<template>
  <div class="question-box-container">
    <b-jumbotron >
      <div v-html="currentQuestion.question">
      </div>

      <hr class="my-4">
      <b-list-group>
        <b-list-group-item 
          v-for="(answer, index) in currentQuestion.answers" 
          :key="answer"
          @click="selectAnswer(index)"
          v-html="answer"
          :class="answerClass(index)"
        >
        </b-list-group-item>
      </b-list-group>

      <b-button 
        variant="primary"
        v-on:click="submitAnswer"
        :disabled="selectedIndex == null || answered == true"
      >
        Submit
      </b-button>
      <b-button @click="next" variant="success" href="#"
        :disabled="answered === false">
        Next
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      answered: false
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        // because the question index starts at 1 , while array index start at 0
        this.correctIndex = this.currentQuestion.correctIndex - 1 
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;
      this.answered = true;

      if(this.selectedIndex == this.correctIndex) {
        isCorrect = true
      }

      this.increment(isCorrect)
    },
    answerClass(index) {
      let classes = ''
      if(!this.answered && this.selectedIndex === index ) {
        classes =  'selected';
      }
      else if (this.answered && this.correctIndex === index ) {
        classes = 'correct';
      }
      else if(this.answered && this.selectedIndex === index) {
        classes = 'incorrect'
      }
      return classes
    }
  }
}
</script>

<style scoped>
.list-group-item:hover {
  cursor: pointer;
  background-color: gray;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: #FF0000;
}
</style>