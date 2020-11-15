<template>
  <v-container fluid pa-0>
    <v-row no-gutters justify="center" class="overlay">
      <v-col cols="10" sm="8" md="6" lg="6" xl="6">
        <v-text-field dark filled rounded dense background-color='grey darken-1'
          append-icon="mdi-magnify"></v-text-field>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="4" v-for="n in 18" :key="n">
          <v-img
            :src="`https://picsum.photos/200?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
          >
            <template v-slot:placeholder>
              <v-row align="center" justify="center" class="fill-height ma-0">
                <v-progress-circular indeterminate color="grey lighten-3">
                </v-progress-circular>
              </v-row>
            </template>
          </v-img>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

export default {
  name: 'Search',
};
</script>

<style scoped>
  .overlay {
    position: fixed;
    top: 60px;
    width: 100vw;
    z-index: 10;
  }
</style>
