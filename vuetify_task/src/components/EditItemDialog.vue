<script setup>
import {onMounted, reactive, ref} from 'vue'
import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const props = defineProps(
    {
      data: {
        required: true
      }
    }
)
const emit = defineEmits(['Dclose'])
const dialog = ref(true)
const initialState = {
  name: '',
  price: null,
  quantity: null,
  image: null,
}

const state = reactive({
  ...initialState,
})


const rules = {
  name: { required },
  price: { required },
  quantity: { required },
  image: { required },
}

const v$ = useVuelidate(rules, state)


function close() {
  v$.value.$reset()
  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
  dialog.value =false;
  emit('Dclose')
}
onMounted(() => {
  state.name = props.data.name
  state.price = props.data.price
  state.quantity = props.data.quantity
});

</script>
<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        width="auto"
    >
      <v-card>
        <v-card-text>


          <form class="mx-5 my-5" style="width: 45rem" >
            <div class="text-h5 my-5">
              Edits Item
            </div>
            <v-text-field
                v-model="state.name"
                :error-messages="v$.name.$errors.map(e => e.$message)"
                :counter="10"
                label="Name"
                required
                @input="v$.name.$touch"
                @blur="v$.name.$touch"
            ></v-text-field>
            <v-text-field
                v-model="state.price"
                :error-messages="v$.price.$errors.map(e => e.$message)"

                hide-details
                label="Price"
                single-line
                type="number"
                @input="v$.price.$touch"
                @blur="v$.price.$touch"
            />
            <v-text-field
                v-model="state.quantity"
                :error-messages="v$.quantity.$errors.map(e => e.$message)"
                class="my-5"
                hide-details
                label="Quantity"
                single-line
                type="number"
                @input="v$.quantity.$touch"
                @blur="v$.quantity.$touch"
            />
            <v-divider/>
            <v-file-input
                v-model="state.image"
                :error-messages="v$.image.$errors.map(e => e.$message)"
                class="my-5"
                label="File input"
                variant="filled"
                prepend-icon="mdi-camera"
                @input="v$.image.$touch"
                @blur="v$.image.$touch"
            ></v-file-input>
            <v-row class="d-flex justify-end" >
              <v-btn
                  color="red darken-1"
                  class="mr-4"
                  @click="close()">
                Cancel
              </v-btn>
              <v-btn
                  color="green darken-1"
                  class="me-4"
                  @click="v$.$validate"
              >
                submit
              </v-btn>
            </v-row>
          </form>
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-row>
</template>
