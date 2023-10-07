import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChartPie,
    faChartSimple,
    faChevronRight,
    faCircleInfo,
    faHouse,
    faPlus,
    faRightFromBracket,
    faShieldHalved,
    faToolbox,
    faUser,
    faWallet,
    faBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineAsyncComponent } from 'vue';

export const registerGlobalComponents = (app) => {
    app.component(
        'auth-layout',
        defineAsyncComponent(() => import('@/layouts/Auth'))
    );
    app.component(
        'default-layout',
        defineAsyncComponent(() => import('@/layouts/Default'))
    );
};

export const importFontAwesomeIcon = (app) => {
    library.add(
        faWallet,
        faChevronRight,
        faToolbox,
        faShieldHalved,
        faCircleInfo,
        faRightFromBracket,
        faHouse,
        faChartSimple,
        faUser,
        faChartPie,
        faPlus,
        faBell
    );
    app.component('font-awesome-icon', FontAwesomeIcon);
};
