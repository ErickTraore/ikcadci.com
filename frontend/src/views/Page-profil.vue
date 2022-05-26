<template>
  <div class="Page-profil">
    <PageProfilComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageProfilComponent from '@/components/PageProfilComponent.vue'

export default {
  name: 'Page-profil',
  components: {
    PageProfilComponent
  }
}
</script>