<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar color="primary" dark>
          axios eg
        </v-toolbar>
      </v-flex>

      <v-flex xs3>
        <v-card>
          <v-card-title>
            create
          </v-card-title>
          <v-card-text>
            <v-textarea
              v-model="textCreate"
              rows="5"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary"
              @click="create">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card>
          <v-card-title>
            read
          </v-card-title>
          <v-card-text>
            <v-textarea
              v-model="textRead"
              rows="5"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary"
              @click="read">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card>
          <v-card-title>
            update
          </v-card-title>
          <v-card-text>
            <v-textarea
              v-model="textUpdate"
              rows="5"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary"
              @click="update">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs3>
        <v-card>
          <v-card-title>
            delete
          </v-card-title>
          <v-card-text>
            <v-textarea
              v-model="textDelete"
              rows="5"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary"
              @click="del">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      textCreate: '',
      textRead: '',
      textUpdate: '',
      textDelete: ''
    }
  },
  methods: {
    async create () {
      const r = await this.$axios.post('test')
      this.textCreate = r.data
    },
    read () {
      this.$axios.get('test')
        .then(r => {
          this.textRead = r.data
        })
        .catch(e => console.log(e.message))
    },
    update () {
      this.$axios.put('test/12345')
        .then(r => {
          this.textUpdate = r.data
        })
        .catch(e => console.log(e.message))
    },
    del () {
      this.$axios.delete('test/44455')
        .then(r => {
          this.textDelete = r.data
        })
        .catch(e => console.log(e.message))
    }
  }
}
</script>
