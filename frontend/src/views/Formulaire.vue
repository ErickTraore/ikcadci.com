<template>
  <div class="formulaire">
    <FormulaireComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormulaireComponent from '@/components/FormulaireComponent.vue'

export default {
  name: 'Formulaire',
  components: {
    FormulaireComponent
  }
}
</script>