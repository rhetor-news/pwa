<template>
  <div>
  <v-sheet>
    <v-container mt-2>
      <v-slide-group mandatory>
        <v-slide-item v-for="(newsTopic, id) in newsTopics" :key="id"
          v-slot:default="{ active, toggle }">
          <v-btn @click="toggle"
            small depressed rounded dark class="mx-1" role="button"
            :color="active ? 'deep-purple accent-5' : 'grey darken-2'"
          >
            <v-icon left small>
              {{ newsTopic.icon }}
            </v-icon>
            <span>
              {{ newsTopic.name }}
            </span>
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </v-sheet>
  <!--
  <v-container>
    <h1>
      Current: {{ currentNewsTopic }}
    </h1>
  </v-container>
  -->
  <v-container v-for="(post, id) in cardPost" :key="id">
    <!-- Card Component: Start ---------------------------------------------------------------->
    <v-card tile elevation="2">
      <v-card-title class="pa-0">
        <v-list two-line class="pa-0">

        <v-list-item-group>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                :alt="post.user.avatar.alt"
                :src="post.user.avatar.src"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ post.user.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                {{ post.user.handle }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="d-flex align-self-start">
              <p class="text-caption text--disabled">12 m</p>
            </v-list-item-action>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              {{ post.content.message }}
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                {{ post.content.article.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                {{ post.content.article.body }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-img
                :alt="post.content.article.image.alt"
                :src="post.content.article.image.src"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-title>

    <v-card-actions>

      <v-btn icon>
        <v-icon>mdi-comment</v-icon>
      </v-btn>
      <span class="subheading">13</span>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <span class="subheading">3</span>

      <v-btn icon>
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
      <span class="subheading">22</span>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>

    </v-card-actions>
  </v-card>
  <!-- Card Component: End -------------------------------------------------------------------->
  </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      newsTopics: [
        {
          id: 1,
          name: 'Local',
          icon: 'mdi-crosshairs-gps',
        },
        {
          id: 2,
          name: 'Politics',
          icon: 'mdi-bank',
        },
        {
          id: 3,
          name: 'Business',
          icon: 'mdi-briefcase',
        },
        {
          id: 4,
          name: 'Weather',
          icon: 'mdi-weather-cloudy',
        },
        {
          id: 5,
          name: 'Travel',
          icon: 'mdi-airplane',
        },
        {
          id: 6,
          name: 'Technology',
          icon: 'mdi-laptop',
        },
      ],
      cards: [
        {
          meta: {
            id: 1,
            tags: [
              'post',
              'general',
            ],
            author: {
              id: '100',
              handle: '@AMontgumz',
              name: 'Alysa Montgomery',
              avatar: {
                src: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                alt: 'Avatar of Alysa Montgomery',
              },
            },
            post: {
              message: 'Meek mill fights for prison reform!',
              preview: {
                title: 'Free Meek and Reform',
                body: 'Many have been talkingabout the reform that the movement Free Meek is Bringing about THIS IS EXTRA TEXT',
                image: {
                  src: 'https://mcsilver.nyu.edu/wp-content/uploads/2019/05/Meek-Mill.jpg',
                  alt: 'Link to original article',
                },
              },
            },
          },
        },
      ],
      cardPost: [
        {
          id: 3,
          user: {
            id: '100',
            handle: '@AMontgumz',
            name: 'Alysa Montgomery',
            avatar: {
              src: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              alt: 'Avatar of Alysa Montgomery',
            },
          },
          content: {
            message: 'Meek mill fights for prison reform!',
            article: {
              title: 'Free Meek and Reform',
              body: 'Many have been talkingabout the reform that the movement Free Meek is Bringing about THIS IS EXTRA TEXT',
              image: {
                src: 'https://mcsilver.nyu.edu/wp-content/uploads/2019/05/Meek-Mill.jpg',
                alt: 'Link to original article',
              },
            },
          },
        },
        {
          id: 2,
          user: {
            id: '100',
            handle: '@AMontgumz',
            name: 'Alysa Montgomery',
            avatar: {
              src: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              alt: 'Avatar of Alysa Montgomery',
            },
          },
          content: {
            message: 'Meek mill fights for prison reform!',
            article: {
              title: 'Free Meek and Reform',
              body: 'Many have been talkingabout the reform that the movement Free Meek is Bringing about THIS IS EXTRA TEXT',
              image: {
                src: 'https://mcsilver.nyu.edu/wp-content/uploads/2019/05/Meek-Mill.jpg',
                alt: 'Link to original article',
              },
            },
          },
        },
        {
          id: 1,
          user: {
            id: '100',
            handle: '@AMontgumz',
            name: 'Alysa Montgomery',
            avatar: {
              src: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
              alt: 'Avatar of Alysa Montgomery',
            },
          },
          content: {
            message: 'Meek mill fights for prison reform!',
            article: {
              title: 'Free Meek and Reform',
              body: 'Many have been talkingabout the reform that the movement Free Meek is Bringing about THIS IS EXTRA TEXT',
              image: {
                src: 'https://mcsilver.nyu.edu/wp-content/uploads/2019/05/Meek-Mill.jpg',
                alt: 'Link to original article',
              },
            },
          },
        },
      ],
      currentNewsTopic: '',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.list-active {
  background-color: blueviolet;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
