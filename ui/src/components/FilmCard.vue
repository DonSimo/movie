<template>
  <v-card class="pa-2" width="250" tile :to="'/films/'+film.id">
    <v-row no-gutters>
      <v-col>
        <h5>{{ film.title }}</h5>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-card-subtitle>
          <v-row>
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
              Director: <strong> {{ film.director }}</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Producer: <strong> {{ film.producer }}</strong>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: "FilmCard",
  props: {
    film: {
      type: Object,
      required: true,
    },
  }
};
</script>