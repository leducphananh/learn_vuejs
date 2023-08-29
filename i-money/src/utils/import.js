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
