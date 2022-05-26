<template>
  <div class="group__header__body__btn"><h2>{{ title }}</h2>
    <ConexionComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ConexionComponent from '@/components/ConexionComponent.vue'

export default {
  name: 'Login',
  components: {
    ConexionComponent
  },
   data() {
      return {
        title: 'CONNEXION'
        }
        }
}
</script>