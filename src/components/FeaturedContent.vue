<template>
  <template v-if="featuredArticle || featuredEvent">
    <h2 class="text-6xl text-azure text-center">
      Featured Content
    </h2>
  </template>
  
  <PageSection
    v-if="featuredArticle"
    color="bg-creme"
  >
    <FeaturedArticle :article="featuredArticle" />
  </PageSection>

  <Divider v-if="featuredArticle && featuredEvent" />

  <PageSection
    v-if="featuredEvent"
    color="bg-white"
  >
    <FeaturedEvent :event="featuredEvent" />
  </PageSection>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { isArticleType, isEventType, type LandingPageType } from "../model";
import Divider from "./Divider.vue";
import FeaturedArticle from "./FeaturedArticle.vue";
import FeaturedEvent from "./FeaturedEvent.vue";
import PageSection from "./PageSection.vue";

type Props = {
  featuredContent: LandingPageType["elements"]["featured_content"];
};

const props = defineProps<Props>();

const featuredArticle = computed(() => props.featuredContent.linkedItems.find(isArticleType));
const featuredEvent = computed(() => props.featuredContent.linkedItems.find(isEventType));
</script>