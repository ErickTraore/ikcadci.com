<template>
  <div class="Piece">
    <PieceDiplomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PieceDiplomeComponent from '@/components/PieceDiplomeComponent.vue'

export default {
  name: 'PieceDiplome',
  components: {
    PieceDiplomeComponent
  }
}
</script>