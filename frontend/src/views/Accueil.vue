<template>
  <div class="accueil">
    <AccueilComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilComponent from '@/components/AccueilComponent.vue'

export default {
  name: 'Accueil',
  components: {
    AccueilComponent
  }
}
</script>