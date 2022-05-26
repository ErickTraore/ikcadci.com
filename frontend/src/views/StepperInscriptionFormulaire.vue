<template>
  <div class="StepperInscriptionFormulaire">
    <StepperInscriptionFormulaireComponent/>
  </div>
</template>

<script>
    // @ is an alias to /src
    import StepperInscriptionFormulaireComponent from '@/components/StepperInscriptionFormulaireComponent.vue'

    export default {
        name: 'StepperInscriptionFormulaire',
        components: {
            StepperInscriptionFormulaireComponent
        }
    }
</script>