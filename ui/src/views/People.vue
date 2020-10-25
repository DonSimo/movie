<template>
  <v-container>
    <v-row>
      <v-container>
        <v-row>
          <v-col md="6" offset="6">
            <h2>Ghibli Movie People</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col offset="2" cols="9">
        <v-sheet class="d-flex" rounded>
          <v-container>
            <v-row justify="around">
              <v-col v-for="(character,i) in people" :key="i">
                <character-card :character="character"/>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CharacterCard from "@/components/CharacterCard";

export default {
  name: "People",
  components: {
    CharacterCard
  },
  data() {
    return {
      people: []
    };
  },
  mounted() {
    this.$http
        .get("./api/people")
        .then((response) => {
          this.people = response.data
        });
  }
};
</script>