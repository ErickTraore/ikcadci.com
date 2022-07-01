<template>
  <div id="app">
    <div class="group__header__body__btn"><h2>{{ title }}</h2>
      <ListeBeforeStudentsComponent/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ListeBeforeStudentsComponent from '@/components/Admin/ListeBeforeStudentsComponent.vue'
export default {
  name: 'ListeBeforeStudents',
  components: {
    ListeBeforeStudentsComponent
  },
   data() {
      return {
        items: '',
        }
    }
}
</script>