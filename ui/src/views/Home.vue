<template>
  <v-app>
    <v-app-bar
        app
        color="white"
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
          @click.prevent="goto('films')"
      >
        <span class="mr-2">Films</span>
      </v-btn>
      <v-btn
          target="_blank"
          text
          @click.prevent="goto('people')"
      >
        <span class="mr-2">People</span>
      </v-btn>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view/>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goto(page) {
      const path= '/'+page
      if(path !== this.$route.path)
       this.$router.push(path)
    }
  }
}
</script>
