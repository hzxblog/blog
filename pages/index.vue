<template>
  <div>
    <v-card>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile
            :key="item._id"
            avatar
            ripple
            nuxt
            :to="'/articles/' + item._id"
            @click=""
          >
            <v-list-tile-content>
              <v-list-tile-title class="mb-2 title">
                {{ item.title }}
              </v-list-tile-title>

              <v-list-tile-sub-title>
                <span class="mr-2 caption">
                  <v-icon size="14">access_time</v-icon> {{ $moment(item.create_time).format('YYYY年MM月DD日') }}
                </span>
                <span class="caption">
                  <v-icon size="14">remove_red_eye</v-icon> {{ item.watcher }}人阅读
                </span>
              </v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>
          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-card>
    <v-layout mt-3 align-center justify-space-between>
      <v-btn small @click="prePage" :disabled="page <= 1">上一页</v-btn>
      <v-btn small flat>{{ page }} / {{ pageCount }}</v-btn>
      <v-btn small @click="nextPage" :disabled="page >= pageCount">下一页</v-btn>
    </v-layout>
  </div>
</template>

<script>
import { getArticleMenu } from '~/plugins/api/article';

export default {
  scrollToTop: true,
  watchQuery: ['page', 'query'],
  data() {
    return {
      items: []
    }
  },
  async asyncData ({ query }) {
    const { data } = await getArticleMenu(query);
    return {
      items: data.results,
      pageCount: Math.ceil(data.count / 20),
      page: query.page ? query.page : 1
    }
  },
  methods: {
    prePage() {
      this.$router.push({
        name: 'index',
        query: {
          page: --this.page,
          query: this.$route.query.query
        }
      })
    },
    nextPage() {
      this.$router.push({
        name: 'index',
        query: {
          page: ++this.page,
          query: this.$route.query.query
        }
      })
    },
  }
}
</script>
