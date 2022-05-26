<template>
  <div class="group__header__body__btn">
  <h3>{{ title1 }}</h3>
    <h3>{{ title2 }}</h3>
    <ConexionComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ConexionComponent from '@/components/ConexionComponent.vue'

export default {
  name: 'Connected',
  components: {
    ConexionComponent
  },
   data() {
      return {
        title1: 'Nous vous avons déconnecté suite à une inactivité.',
        title2: 'Vous pouvez vous reconnecter'
        }
        }
}
</script>