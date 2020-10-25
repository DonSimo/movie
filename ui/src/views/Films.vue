<template>
  <v-container>
    <v-row >
      <v-container>
        <v-row>
          <v-col md="6" offset="6">
            <h2>Ghibli {{$route.name}}</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col offset="2" cols="9">
        <v-sheet class="d-flex" rounded >
          <v-container>
            <v-row>
              <v-col cols="3" v-for="(film,i) in films" :key="i">
                <film-card :film="film"/>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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
          this.films.forEach(film => film.people = [])
        });
  }
};
</script>