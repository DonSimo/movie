<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-card class="pa-2" tile>
            <v-row no-gutters>
              <v-col offset="4" cols="8">
                <v-card-title>
                  {{ character.name }}
                </v-card-title>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="8" offset="2">
                <v-card-subtitle>
                  <v-row no-gutters>
                    <v-col>
                      ({{ character.age }})
                    </v-col>
                    <v-col>
                      <strong>&nbsp; {{ character.gender }}</strong>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      Eye color: {{ character.eye_color }}
                    </v-col>
                    <v-col>
                      Hair color: {{ character.hair_color }}
                    </v-col>
                  </v-row>
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col offset="2">
                <v-list v-if="films.length > 0">
                  <v-subheader>Films</v-subheader>
                  <v-list-item v-for="(title, i) in films" :key="i">
                    <v-list-item-content>
                      <v-list-item-title>{{ title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-card-text v-else>
                  <strong>No film found for this Character</strong>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CharacterDetail",
  data() {
    return {
      character: {},
      films: []
    }
  },
  created() {
    this.$http.get('./api/people/' + this.$route.params.id)
        .then(resp => {
          this.character = resp.data
          this.character.films.forEach(film => {
                const id = this.extract_film_id(film)
                this.$http.get('./api/films' + id)
                    .then(resp => {
                      this.films.push(resp.data.title)
                    })
              }
          )
        })
  },
  methods: {
    extract_film_id(url) {
      const lastIndexOfSlash = url.lastIndexOf('/')
      if (lastIndexOfSlash >= 0) {
        return url.substring(lastIndexOfSlash)
      }
      return null
    }
  }
}
</script>

<style scoped>

</style>