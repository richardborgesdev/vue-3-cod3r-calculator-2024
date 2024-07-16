<script setup>
import { ref } from 'vue';
import DisplayComp from '../components/DisplayComp.vue';
import ButtonComp from '../components/ButtonComp.vue';

const emit = defineEmits(['onError'])

const displayValue = ref("0");
const clearDisplay = ref(false);
const operation = ref(null);
const values = ref([0, 0]);
const current = ref(0);

const clearMemory = () => {
  displayValue.value = "0";
  clearDisplay.value = false;
  operation.value = null;
  values.value = [0, 0];
  current.value = 0;
}

const setOperation = (operationDigit) => {
  if (current.value === 0) {
    operation.value = operationDigit;
    current.value = 1;
    clearDisplay.value = true;
  } else {
    const equals = operationDigit === "=";
    const currentOperation = operation.value;

    try {
      values.value[0] = eval(`${values.value[0]} ${currentOperation} ${values.value[1]}`);
    } catch (error) {
      emit('onError', error);
    }

    values.value[1] = 0;
    displayValue.value = values.value[0];
    operation.value = equals ? null : operation;
    current.value = equals ? 0 : 1;
    clearDisplay.value = !equals;
  }
}

const addDigit = (n) => {
  if (n === "." && displayValue.value.includes(".")) {
    return;
  }

  const shouldClearDisplay = displayValue.value === "0" || clearDisplay.value;
  const currentValue = shouldClearDisplay ? "" : displayValue.value;
  displayValue.value = currentValue + n;

  clearDisplay.value = false;
  values.value[current.value] = displayValue.value;
}
</script>

<template>
  <div class="calculator">
    <DisplayComp :value="displayValue" />
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
