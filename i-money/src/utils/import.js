import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBell,
    faCalendarDays,
    faCamera,
    faChartPie,
    faChartSimple,
    faChevronRight,
    faCircleInfo,
    faHouse,
    faLocationDot,
    faNoteSticky,
    faPlus,
    faRightFromBracket,
    faShieldHalved,
    faToolbox,
    faUser,
    faUserGroup,
    faWallet,
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
        faBell,
        faNoteSticky,
        faCalendarDays,
        faLocationDot,
        faUserGroup,
        faCamera
    );
    app.component('font-awesome-icon', FontAwesomeIcon);
};
