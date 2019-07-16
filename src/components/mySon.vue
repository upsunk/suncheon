<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-card-title>
            아들 이름: {{ name }}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="call">call</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: [
    'name'
  ],
  methods: {
    call () {
      this.$emit('help')
    }
  }
}
</script>
