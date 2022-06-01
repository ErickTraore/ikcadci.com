<template>
  <div class="Piece">
    <PieceComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PieceComponent from '@/components/PieceComponent.vue'

export default {
  name: 'Piece',
  components: {
    PieceComponent
  }
}
</script>