<template>
  <v-card max-width="374">
        <v-app-bar
            flat
            color="primary"
          >
       <v-toolbar-title class="title white--text pl-0">{{ film.title }}</v-toolbar-title>
        </v-app-bar>
    <v-row>
      <v-col>
        <v-card-subtitle>
          <v-row>
            <v-col >
              {{ film.release_date }}.
              <v-avatar size="20">
                <v-img src="@/assets/rotten_tomato.svg" />
              </v-avatar>
              <strong>&nbsp;{{ film.rt_score }} %</strong>
            </v-col>
          </v-row>
          <v-row>
            <v-col >
              Director: <strong> {{ film.director }}</strong>
            </v-col>
            <v-col>
              Producer: <strong> {{ film.producer }}</strong>
            </v-col>
          </v-row>
        </v-card-subtitle>
        <v-card-text v-if="detailsShowed">
          <v-row>
            <v-col>
              {{ film.description }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <span>
                People: <strong>{{ peopleDetails }}</strong></span
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-actions>
          <v-btn color="primary" @click.prevent="showDetails()"
            >{{btnName}}</v-btn
          >
        </v-card-actions>
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
  },
  data() {
    return {
      detailsShowed: false,
      people: [],
    };
  },
  computed: {
    peopleDetails() {
      return this.people.map((entry) => entry.name).join(", ");
    },
    btnName() {
        return this.detailsShowed === false ? 'Show Details': 'Hide Details'
    },
    scoreImage() {
    return parseInt(this.film.rt_score) > 70 ? 'fresh_tomato.svg': 'rotten_tomato.svg'
    }
  },
  methods: {
    showDetails() {
      if (this.detailsShowed === false) {
        this.$http
          .get(
            "./api/people?film_id=" + this.film.id
          )
          .then((response) => {
            this.people = response.data;
          });
      }
      this.detailsShowed = !this.detailsShowed;
    },
  },
};
</script>