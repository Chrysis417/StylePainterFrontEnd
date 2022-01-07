
<template>
  <div>
    <div class="page-header clear-filter" filter-color="white">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg0.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">s
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Style Painter</h1>
          <h3>基于深度学习 自由创作属于您的山水画</h3>
          <router-link
          to="/upload"
          class="btn btn-default btn-round btn-black btn-lg"
        >
          开始创作
        </router-link>
        </div>
      </div>
    </div>
    <carousel-section></carousel-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    // Parallax,
    // BasicElements,
    // Navigation,
    // TabsSection,
    // ProgressPagination,
    // Notifications,
    // Typography,
    // JavascriptComponents,
    CarouselSection,
    // NucleoIconsSection,
    // SignupForm,
    // ExamplesSection,
    // DownloadSection
  }
};
</script>
<style></style>
