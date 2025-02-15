// src\main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import Maska from 'maska';

const app = createApp(App);
app.use(router);
app.use(PerfectScrollbarPlugin);
app.use(VueTablerIcons);
app.use(Maska);
app.use(VueApexCharts);
app.use(vuetify).mount('#app');
