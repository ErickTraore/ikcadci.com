<template>
  <div id="app">
    <div class="group__header__body__btn"><h2>{{ title }}</h2>
      <ConsulteComponent/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ConsulteComponent from '@/components/Admin/ConsulteComponent.vue'
export default {
  name: 'Consulte',
  components: {
    ConsulteComponent
  },
   data() {
      return {
        items: '',
        }
    }
}
</script>