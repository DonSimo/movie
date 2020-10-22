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
      .get("./api/films")
      .then((response) => {
        this.films = response.data
        this.films.forEach(film => film.people=[])
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
