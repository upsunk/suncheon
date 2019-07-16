<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.subItems"
            :key="subItem.title"
            :to="subItem.to"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="light-blue lighten-4">
      <v-toolbar-side-icon
        @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $store.state.user ? $store.state.user.displayName : '아직 로그인 안 함.' }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          title: 'Home',
          icon: 'mdi-vector-arrange-below',
          active: true,
          subItems: [
            {
              title: 'dashboard',
              icon: 'mdi-eight-track',
              to: '/'
            },
            {
              title: 'About2',
              icon: 'mdi-format-indent-increase',
              to: '/about2'
            }
          ]
        },
        {
          title: 'Lectures',
          icon: 'mdi-account-circle',
          subItems: [
            {
              title: 'card',
              icon: 'mdi-comment-processing',
              to: '/lectures/card'
            },
            {
              title: 'layout',
              icon: 'mdi-file-check',
              to: '/lectures/layout'
            },
            {
              title: 'notes',
              icon: 'mdi-vector-arrange-below',
              to: '/lectures/notes'
            },
            {
              title: 'sign',
              icon: 'mdi-sign-direction',
              to: '/lectures/sign'
            },
            {
              title: 'axios',
              icon: 'mdi-access-point',
              to: '/lectures/axios'
            },
            {
              title: 'mother',
              icon: 'mdi-access-point',
              to: '/lectures/mother'
            },
            {
              title: 'vuex',
              icon: 'mdi-sign-direction',
              to: '/lectures/vuex'
            }
          ]
        }
      ]
    }
  }
}
</script>
