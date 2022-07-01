<template>
  <div class="piecemix">
    <PiecemixComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PiecemixComponent from '@/components/PiecemixComponent.vue'

export default {
  name: 'PieceMix',
  components: {
    PiecemixComponent
  }
}
</script>