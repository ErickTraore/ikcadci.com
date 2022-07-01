<template>
  <div class="Piece">
    <PieceMotivationComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PieceMotivationComponent from '@/components/PieceMotivationComponent.vue'

export default {
  name: 'PieceMotivation',
  components: {
    PieceMotivationComponent
  }
}
</script>