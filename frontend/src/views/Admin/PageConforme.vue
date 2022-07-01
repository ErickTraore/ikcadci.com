<template>
  <div class="pageconforme">
    <PageConformeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageConformeComponent from '@/components/Admin/PageConformeComponent.vue'

export default {
  name: 'PageConforme',
  components: {
    PageConformeComponent,
  }
}
</script>