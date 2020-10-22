<template>
  <v-app>
    <v-app-bar
      app
      color="brown lighten-5"

    >
      <div class="d-flex align-center">
        <v-img
          alt="Ghibli Logo"
          contain
          src="@/assets/ghibli.png"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
      >
        <span class="mr-2">Films</span>
      </v-btn>
       <v-btn
        target="_blank"
        text
      >
        <span class="mr-2">People</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
      <Films/>
      </v-container>
    </v-main>
      <v-footer app>
    <!-- -->
  </v-footer>
  </v-app>
</template>

<script>
import Films from './components/Films';

export default {
  name: 'App',

  components: {
    Films,
  },

  data: () => ({
    //
  }),
};
</script>
