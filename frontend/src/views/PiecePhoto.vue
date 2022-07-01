<template>
  <div class="Piece">
    <PiecePhotoComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PiecePhotoComponent from '@/components/PiecePhotoComponent.vue'

export default {
  name: 'PiecePhoto',
  components: {
    PiecePhotoComponent
  }
}
</script>