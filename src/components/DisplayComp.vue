<script setup>
defineProps({
  value: String,
});
</script>

<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<style>
.display {
  grid-column: span 4;
  background-color: #0004;

  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
}
</style>
