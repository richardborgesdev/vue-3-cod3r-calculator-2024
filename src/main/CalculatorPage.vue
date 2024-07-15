<script setup>
import DisplayComp from '../components/DisplayComp.vue';
import ButtonComp from '../components/ButtonComp.vue';

const clearMemory = () => {
  console.log('limpar memória');
}

const setOperation = (operation) => {
  console.log('operação ' + operation);
}

const addDigit = (n) => {
  console.log('digito ' + n);
}
</script>

<template>
  <div class="calculator">
    <DisplayComp value="1000" />
    <ButtonComp label="AC" triple @onCalcButtonClick="clearMemory" />
    <ButtonComp label="/" operation @onCalcButtonClick="setOperation" />
    <ButtonComp label="7" @onCalcButtonClick="addDigit" />
    <ButtonComp label="8" @onCalcButtonClick="addDigit" />
    <ButtonComp label="9" @onCalcButtonClick="addDigit" />
    <ButtonComp label="*" operation @onCalcButtonClick="setOperation" />
    <ButtonComp label="4" @onCalcButtonClick="addDigit" />
    <ButtonComp label="5" @onCalcButtonClick="addDigit" />
    <ButtonComp label="6" @onCalcButtonClick="addDigit" />
    <ButtonComp label="-" operation @onCalcButtonClick="setOperation" />
    <ButtonComp label="1" @onCalcButtonClick="addDigit" />
    <ButtonComp label="2" @onCalcButtonClick="addDigit" />
    <ButtonComp label="3" @onCalcButtonClick="addDigit" />
    <ButtonComp label="+" operation @onCalcButtonClick="setOperation" />
    <ButtonComp label="0" double @onCalcButtonClick="addDigit" />
    <ButtonComp label="." @onCalcButtonClick="addDigit" />
    <ButtonComp label="=" operation @onCalcButtonClick="setOperation" />
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
