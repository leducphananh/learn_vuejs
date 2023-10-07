import '@/assets/styles/global.css';
import '@/assets/styles/tailwind.css';
import router from '@/router';
import {
    importFontAwesomeIcon,
    registerGlobalComponents,
} from '@/utils/import';
import { createApp } from 'vue';
import App from './App.vue';
import { firestoreAuth } from './configs/firebase';

let app;

firestoreAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        registerGlobalComponents(app);
        importFontAwesomeIcon(app);

        app.use(router).mount('#app');
    }
});
