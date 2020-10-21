<template>
  <div>
      <v-row justify="center">
            <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(film, i) in films"
          :key="i"
          hide-actions
        >
        <v-expansion-panel-header>
          <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
              <strong>{{film.title}}</strong>
                
              </v-col>
              <v-col>
                <span
                  class="grey--text"
                >
                  &nbsp;({{ film.release_date }})
                </span>
              </v-col>
              <v-col>
              <span
                  class="grey--text"
                >
                  Directed by: <strong>{{ film.director }}</strong>
                </span>
              </v-col>
              <v-col>
             
                <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="@/assets/rotten_tomato.svg"
                  />
                
                </v-avatar>
                    {{ film.rt_score }}%
              </v-col>
          </v-row>
        </v-expansion-panel-header>
         <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="film.description"></v-card-text>
            <v-card-actions>
             <v-btn class="ma-2">Show people</v-btn>
            </v-card-actions>
          </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "Films",
  data() {
    return {
      films: [],
    };
  },
  mounted() {
    this.$http
      .get("http://127.0.0.1:5000/movies/api/films")
      .then((response) => (this.films = response.data));
  },
};
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
