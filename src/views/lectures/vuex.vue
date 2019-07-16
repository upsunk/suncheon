<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-btn
            color="success"
            @click="set">set</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    set () {
      this.$store.commit('setTitle', '변했냐?')
    }
  }
}
</script>
