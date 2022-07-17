<template>
  <div class="createPass">
    <CreatePassComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePassComponent from '@/components/CreatePassComponent.vue'

export default {
  name: 'CreatePass',
  components: {
    CreatePassComponent
  }
}
</script>