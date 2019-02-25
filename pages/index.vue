<template>
  <div>
    <Menu></Menu>
    <CareerColumn class="center"></CareerColumn>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import CareerColumn from '@/components/CareerColumn.vue'

export default {
  name: 'Index',
  components: {
    Menu,
    CareerColumn
  }
}
</script>
<style lang="scss" scoped>

</style>
