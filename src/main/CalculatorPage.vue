<script setup>
import DisplayComp from '../components/DisplayComp.vue';
import ButtonComp from '../components/ButtonComp.vue';
</script>

<template>
  <div class="calculator">
    <DisplayComp />
    <ButtonComp label="AC" triple />
    <ButtonComp label="/" operation />
    <ButtonComp label="7" />
    <ButtonComp label="8" />
    <ButtonComp label="9" />
    <ButtonComp label="*" operation />
    <ButtonComp label="4" />
    <ButtonComp label="5" />
    <ButtonComp label="6" />
    <ButtonComp label="-" operation />
    <ButtonComp label="1" />
    <ButtonComp label="2" />
    <ButtonComp label="3" />
    <ButtonComp label="+" operation />
    <ButtonComp label="0" double />
    <ButtonComp label="." />
    <ButtonComp label="=" operation />
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
