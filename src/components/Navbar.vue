<template>
  <div>
    <v-bottom-navigation app dense grow dark background-color='deep-purple accent-5'>

      <v-btn :to="{ name: 'Home'}" value="Home" icon>
        <span class='d-none d-sm-flex'>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Trending'}" value="Trending" icon>
        <span class='d-none d-sm-flex'>Trending</span>
        <v-icon>mdi-trending-up</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Map'}" value="Map" icon>
        <span class='d-none d-sm-flex'>Map</span>
        <v-icon>mdi-compass-outline</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Search'}" value="Search" icon>
        <span class='d-none d-sm-flex'>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'Profile'}" value="Profile" icon>
        <span class='d-none d-sm-flex'>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style>

</style>
