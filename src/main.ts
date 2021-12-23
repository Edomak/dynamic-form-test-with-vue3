import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

require('@/styles/base.scss')

const VueDynamicForms = createDynamicForms({
    // Global Options go here
});

createApp(App)
.use(store)
.use(router)
.use(VueDynamicForms)
.mount('#app')
