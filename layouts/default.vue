<template>
  <v-app dark>
    <v-toolbar app fixed>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="rightDrawer = !rightDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-4">韩志雄的博客</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" nuxt>首页</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-text-field
        height="40"
        append-icon="search"
        v-model="query"
        class="searchBar"
        single-line
        label="搜索"
        type="text"
        @click:append="search"
      >
      </v-text-field>
    </v-toolbar>

    <v-navigation-drawer
      v-model="rightDrawer"
      left
      temporary
      fixed
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-title>首页</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container>
        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
          >
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      fixed
      app
      dark
    >
      <v-layout>
        <v-flex text-xs-center>
          <span>Copyright © 2018 韩志雄的博客 </span>
          <a href="http://www.miitbeian.gov.cn" target="_blank"> 鄂ICP备18003305号-1</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  watchQuery: ['query'],
  data() {
    return {
      rightDrawer: false,
      query: ''
    }
  },
  mounted() {
    this.query = this.$route.query.query;
  },
  methods: {
    search() {
      this.$router.push({
        path: '/',
        query: { query: this.query }
      })
    }
  }
}
</script>
