<template>
  <div>
    <v-row dense>
      <v-col v-for="(film,i) in films" :key="i" cols="3">
        <film-card :film="film"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue'
export default {
  name: "Films",
  components: {
    FilmCard
  },
  data() {
    return {
      films: []
    };
  },
  mounted() {
    this.$http
      .get("http://127.0.0.1:5000/movies/api/films")
      .then((response) => {
        this.films = response.data
        this.films.forEach(film => film.people=[])
      });
  },
  methods: {
    showPeople(index) {
      const film_id = this.films[index].id
       this.$http
      .get("http://127.0.0.1:5000/movies/api/people?film_id="+film_id)
      .then((response) => {
        this.films[index].people = response.data
        this.films[index].peopleShowed=true
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
