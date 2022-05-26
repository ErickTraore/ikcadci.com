<template>
  <div class="info">
    <InfoComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoComponent from '@/components/InfoComponent.vue'

export default {
  name: 'Info',
  components: {
    InfoComponent
  }
}
</script>