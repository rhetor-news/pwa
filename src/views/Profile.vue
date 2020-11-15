<template>
    <div>
      <v-container fluid pa-0>
        <v-row no-gutters justify='center'>
          <v-col class='grey'>
            <br /><br /><br />
          </v-col>
        </v-row>
      </v-container>
      <v-container py-0>
        <v-row>
          <v-container class="grey lighten-2">
            <v-row>
              <v-col cols='4' class='mt-n16'>
                <v-avatar size='80'>
                <img alt='John' src='https://cdn.vuetifyjs.com/images/lists/4.jpg'>
              </v-avatar>
              </v-col>
              <v-col cols='4'>
                <div class="text-center">
                  <v-btn small block rounded dark color='deep-purple accent-5'>Message</v-btn>
                </div>
              </v-col>
              <v-col cols='4'>
                <div class="text-center">
                  <v-btn small block rounded dark color='deep-purple accent-5'>Edit</v-btn>
                </div>
              </v-col>
              <v-col cols='12' class="pb-0">
                <div>
                  <h3 class='mb-0'>Alyssa Montgomery</h3>
                  <p class='caption mb-1'>@AMontgumz</p>
                  <p>
                    Hey there! I'm Alyssa and I love reading and writing about music and politics.
                    Particularly how musicians are able to effect politics. If you ever want to
                    collaberate feel free to message me!
                  </p>
                </div>
              </v-col>
              <v-col cols="5" class="py-0">
                <v-icon small>
                  mdi-map-marker
                </v-icon>
                <span class='caption'>San Diego, CA</span>
                <p class='caption pl-1'><b>22.2k</b> Subscribers</p>
              </v-col>
              <v-col cols="7" class="py-0">
                <v-icon small>
                  mdi-link-variant
                </v-icon>
                <span class='caption'>www.AGumz.com</span>
                <p class='caption pl-1'><b>79</b> Subscribed</p>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
      <v-container pa-0>
        <v-card>
    <v-tabs v-model="tab">
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, tab) in items" :key="tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
      </v-container>
    </div>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      tab: null,
      items: [
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
      ],
    };
  },
};
</script>

<style scoped>
  .one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
