
import Vue from 'vue';
import Router from 'vue-router';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';
import Index from './pages/StarterPage.vue';
import Upload from './pages/UploadPage.vue'
Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: StarterNavbar, footer: StarterFooter },
      props: {
        header: { colorOnScroll: 1000 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/upload',
      name: 'upload',
      components: { default: Upload, header: StarterNavbar, footer: StarterFooter },
      props: {
        header: { colorOnScroll: 1000 },
        footer: { backgroundColor: 'black' }
      }
    },
    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
