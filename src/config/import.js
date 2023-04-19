import { defineAsyncComponent } from 'vue';

export function registerComponent(app) {
    app.component('Default', defineAsyncComponent(() => import("@/layouts/Default")));
    app.component('Auth', defineAsyncComponent(() => import("@/layouts/Auth")));
    app.component('Empty', defineAsyncComponent(() => import("@/layouts/Empty")));
}