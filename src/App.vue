<template>
  <v-app>
    <div>
    <v-app-bar app color='deep-purple accent-5' dense dark>
      <v-btn icon>
        <v-icon large>
          mdi-account-circle
        </v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        {{ $route.name }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon v-if="$route.name == 'Profile'"
        @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon v-else color='deep-purple accent-5'>
      </v-app-bar-nav-icon>
    </v-app-bar>
    </div>

    <v-navigation-drawer app v-if="$route.name == 'Profile'" v-model="drawer"
      right color='deep-purple accent-5' hide-overlay dense dark>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>
              mdi-wallet-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Wallet
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>
              mdi-cog-outline
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Settings
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="ma-0 pa-0">
      <router-view>
        <!-- This is where the views are rendered. -->
      </router-view>
      </v-container>
    </v-main>

    <div>
    <navbar />
    </div>

  </v-app>
</template>

<script>
import navbar from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    navbar,
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
