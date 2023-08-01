<script setup>
import {  defineEmits } from "vue"
import Item from '../components/Item.vue'
import ItemDialog from '../components/AddItemDialog.vue'
import Search from '../components/Search.vue'
import dayjs from 'dayjs'
function searchEvent(obj){
  console.log(obj)
}
const emit =defineEmits(['exitModel']);
function close(){
  emit('exitModel')
}
</script>

<template>
  <div>
      <v-row>
          <v-col cols="11">
              <Search @searchButton="searchEvent" />
          </v-col>
        <v-col cols="1" >
            <ItemDialog />
        </v-col>
      </v-row>


    <v-row  >

      <v-col cols="3" v-for="item in [0,3,4,5,6,7,8,9,9,1,123,12,31,23,12,3123]">
        <Item
          :name="'test'"
          :price="100"
          :image="'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896'"
          :quantity="10"
          :order-date="dayjs(new Date().toString()).format('YYYY/MM/DD hh:mm A')" />
      </v-col>

    </v-row>
  </div>

</template>

<style scoped>

</style>
