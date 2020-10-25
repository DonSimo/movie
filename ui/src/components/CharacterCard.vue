<template>
  <v-card class="pa-2" width="250"  :to="'people/'+character.id">
    <v-row no-gutters>
      <v-col offset="3">
        <h4>{{ character.name }}</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-card-subtitle>
          <v-row>
            <v-col>
              ({{ character.age }})
            </v-col>
            <v-col>
              {{character.gender}}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Eye color: {{character.eye_color}}
            </v-col>
            </v-row>
            <v-row>
            <v-col>
              Hair color: {{character.hair_color}}
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  }
};
</script>