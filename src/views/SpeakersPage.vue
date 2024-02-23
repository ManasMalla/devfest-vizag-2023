<template>
  <v-main class="pa-0 ma-0">
    <v-container fluid class="my-10">
      <v-row>
        <v-col md="12" sm="12" cols="12" class="text-center google-font">
          <p
            class="google-font gdg-h1 mb-2 grey--text text--darken-4"
            style="font-size: 220%"
          >
            Speakers
          </p>
          <p>
            Whatever your challenge, these leaders on the front line of
            transformation, innovation, and exploration helped solve it with
            you.
          </p>
          <!-- <v-btn
        depressed
        rounded
        target="_blank"
        color="primary"
        :href="IWDInfo.call_for_speakers.link"
        v-if="IWDInfo.call_for_speakers.status==1"
        style="text-transform: none; font-size: 80%; font-weight: 500; margin-top: 12px;"
        >Apply to become a speaker</v-btn> -->
        </v-col>
        <v-col
          md="2"
          cols="6"
          sm="3"
          v-for="(item, index) in sortedSpeakersInfo"
          :key="index"
        >
          <speakerCardVue :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import speakerCardVue from '@/components/speakers/speakerCard.vue';
import speakersJSON from '@/assets/data/speakers.json';

import IWDJSON from '@/assets/data/IWDs.json';

export default {
  name: 'SpeakersPages',
  components: {
    speakerCardVue,
  },
  data: () => ({
    speakersInfo: speakersJSON,
    IWDInfo: IWDJSON,
  }),
  computed: {
    sortedSpeakersInfo() {
      return [...this.speakersInfo].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
  },
};
</script>

<style></style>
