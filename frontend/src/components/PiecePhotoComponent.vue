<template>
    <div id="app">
      <searchInputComponent v-model="titleTerm" />

  </div>

</template>
<script>
import SearchInputComponent from '@/components/SearchInputComponent.vue';
  export default {
      name: "PiecePhotoComponent",
     components: {
    SearchInputComponent
    },
    data: function() {
      return {
        titleTerm: "Votre photo d'identité",
      }
    },
    methods: {
      withDirectiveSearch(term) {
        this.message = `Searched with v-model: ${term}`;
    },
  },
}
</script>
<style lang="scss">
    @import 'sass/main.scss';
</style>