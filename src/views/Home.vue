<template>
  <div class="vue_bg">
    <FormTest />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormTest from '../components/FormTest.vue'

export default defineComponent({
  name: 'Home',
  components: {
    FormTest
  },
});
</script>

<style lang="scss">

  .vue_bg {
    // background-image: url('/vue-bg.jpeg');
    min-height: 100%;
    background: linear-gradient(0deg, rgba(2, 24, 9, 0.26), rgba(100, 135, 105, 0.3)), url('/vue-bg.jpeg');
    background-size: cover;
  }
  
</style>
