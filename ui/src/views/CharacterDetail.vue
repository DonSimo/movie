<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-card class="pa-2" tile>
            <v-row no-gutters>
              <v-col offset="4" cols="8">
                <v-card-title>
                  Pozu
                </v-card-title>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="8" offset="2">
                <v-card-subtitle>
                  <v-row no-gutters>
                    <v-col>
                      (13)
                    </v-col>
                    <v-col>
                      <strong>&nbsp; Male</strong>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      Eye color: Black
                    </v-col>
                    <v-col>
                      Hair color: Black
                    </v-col>
                  </v-row>
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col offset="2">
                <v-card-text>
                  films: ok
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
      character: {}
    }
  }
}
</script>

<style scoped>

</style>