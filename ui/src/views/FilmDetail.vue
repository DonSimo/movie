<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <v-card class="pa-2" tile v-if="!filmNotFound">
          <v-row no-gutters>
            <v-col offset="4" cols="8">
              <v-card-title>
                {{ film.title }}
              </v-card-title>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="8" offset="2">
              <v-card-subtitle>
                <v-row no-gutters>
                  <v-col>
                    ({{ film.release_date }})
                  </v-col>
                  <v-col>
                    <v-avatar size="20">
                      <v-img src="@/assets/rotten_tomato.svg"/>
                    </v-avatar>
                    <strong>&nbsp;{{ film.rt_score }} %</strong>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    Director: {{ film.director }}
                  </v-col>
                  <v-col>
                    Producer: {{ film.producer }}
                  </v-col>
                </v-row>
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-row>
            <v-col offset="2">
              <v-card-text>
                {{ film.description }}
              </v-card-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col offset="2">
              <v-list v-if="people.length > 0">
                <v-subheader>People</v-subheader>
                <v-list-item v-for="(character, i) in people" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>{{ character.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-text v-else>
                <strong>No people found for this Film</strong>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-2" tile v-else>
          <v-row no-gutters>
            <v-col offset="4" cols="8">
              <v-card-title>
                {{ errorMessage }}
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FilmDetail",
  data() {
    return {
      film: {},
      people: [],
      filmNotFound: true,
      errorMessage: ""
    }
  },
  created() {
    this.$http.get('./api/films/' + this.$route.params.id)
        .then(
            resp => {
              this.film = resp.data
              console.log(this.film)
              this.filmNotFound = false
              this.$http.get('./api/films/' + this.$route.params.id + '/people')
                  .then(
                      (respPeople => this.people = respPeople.data)
                  )
            }
        ).catch(e => {
      this.errorMessage = e.response.data
      this.filmNotFound = true
    })

  }
}
</script>

<style scoped>

</style>