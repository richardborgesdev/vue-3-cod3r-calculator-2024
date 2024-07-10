<script setup>
import DisplayComp from '../components/DisplayComp.vue';
import ButtonComp from '../components/ButtonComp.vue';
</script>

<template>
  <div class="calculator">
    <DisplayComp />
    <ButtonComp />
  </div>
</template>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
