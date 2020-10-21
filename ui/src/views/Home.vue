<template>
  <div class="home">
    <Films/>
  </div>
</template>

<script>
// @ is an alias to /src
import Films from '@/components/Films.vue'

export default {
  name: 'Home',
  components: {
    Films
  }
}
</script>
