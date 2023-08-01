<script setup>
import {ref} from 'vue'

import EditItemDialog from '../components/EditItemDialog.vue'

const isEditing = ref(false)
const isDelete = ref(false)
defineProps({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
const close = () => {
  isEditing.value = false
  isDelete.value = false
}
</script>
<template>
  <v-card
      class="mx-auto my-12"
      max-width="374"
  >

    <v-img
        cover
        height="250"
        :src="image"
    ></v-img>

    <v-card-item>
      <v-card-title>{{this.name}}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        Price : {{this.price}}$
      </div>
      <div class="my-4 text-subtitle-1">
        Quantity: {{this.quantity}}
      </div>
    </v-card-text>
    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{this.orderDate}}
      </div>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Actions</v-card-title>
    <v-card-actions>
      <v-btn
          color="blue lighten-2"
          @click="isEditing = true"
      >
        Edit
      </v-btn>
      <EditItemDialog v-if="isEditing" :data="{
  name: this.name,
  quantity: this.quantity,
  price: this.price,
  orderDate: this.orderDate,
}"
                      @Dclose="close"
      />
      <v-btn
        color="red lighten-1"
        @click="isDelete = true"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

