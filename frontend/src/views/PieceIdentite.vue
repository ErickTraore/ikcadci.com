<template>
  <div class="Piece">
    <PieceIdentiteComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PieceIdentiteComponent from '@/components/PieceIdentiteComponent.vue'

export default {
  name: 'PieceIdentite',
  components: {
    PieceIdentiteComponent
  }
}
</script>