import '@/assets/styles/global.css';
import '@/assets/styles/tailwind.css';
import router from '@/router';
import { registerGlobalComponents } from '@/utils/import';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';

library.add(faUserSecret);

const app = createApp(App);

registerGlobalComponents(app);

app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
