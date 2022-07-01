<template>
    <div id="app">
      <searchInputComponent v-model="titleTerm" />

  </div>

</template>
<script>
import SearchInputComponent from '@/components/SearchInputComponent.vue';
  export default {
      name: "PieceMotivationComponent",
     components: {
    SearchInputComponent
    },
    data: function() {
      return {
        titleTerm: "lettre de motivation",
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