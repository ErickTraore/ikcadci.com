<template>
  <div class="Seba">
    <SebaComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import SebaComponent from '@/components/SebaComponent.vue'

export default {
  name: 'Seba',
  components: {
    SebaComponent
  }
}
</script>