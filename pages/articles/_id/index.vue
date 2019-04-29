<template>
  <v-card>
    <v-container>
      <div class="pt-3 pb-3">
        <div class="display-1">{{ data.title}}</div>
        <v-layout mt-3>
          <span class="mr-2 caption">
            <v-icon size="14">access_time</v-icon> {{ $moment(data.create_time * 1000).format('MMMM Do YYYY, h:mm:ss') }}
          </span>
          <span class="caption">
            <v-icon size="14">remove_red_eye</v-icon> {{ data.watcher }}人阅读
          </span>
        </v-layout>
      </div>
      <v-divider></v-divider>
      <div class="markdown-body mt-3" v-html="data.content">

      </div>
    </v-container>
  </v-card>
</template>

<script>
import { getArticle } from '~/plugins/api/article';
import markdown from '~/plugins/markdown';

export default {
  async asyncData ({ params }) {
    const { data } = await getArticle(params.id);
    data.content = markdown.render(data.content ? data.content : "");
    return {
      data: data,
    }
  },
}
</script>
