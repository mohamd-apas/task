<script setup>
import { ref, watch, defineEmits } from "vue"
const emit = defineEmits(['searchButton'])
let search = ref('')
const type = ref('Name')
const items = ['Name', 'Quantity', 'Price']
function searchButton(){
  emit('searchButton',{ text: search.value, filter: type.value });
}
watch(type, (x) => {
  console.log(x)
  searchButton();
})

</script>

<template>
  <div class="search d-flex justify-center mt-5 border-b-lg align-center">
    <slot name="Search">
      <div class="w-100 bg-white pa-3   h-100  d-flex justify-start align-center px-2  rounded-lg ">
        <v-icon icon="mdi-magnify" class="text-placeholderColor"></v-icon>
        <input type="text" placeholder="Search" class="w-100 px-3   rounded-xl" v-model="search" @keydown="searchButton" />
        <slot name="filters">
        </slot>
      </div>
    </slot>

    <slot name="SearchName">
      <div class="py-2 " >
        <v-select
          v-model="type"
          style="width: 10rem"
          label="Select"

          :items="items"
        ></v-select>
      </div>
    </slot>

  </div>
</template>



<style lang="scss" scoped>
input{

  border: none !important;
  outline: none !important;
  &::placeholder{
    color:rgba(217, 217, 217, 1) !important;

  }
}
</style>
