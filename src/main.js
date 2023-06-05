import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import firebaseConfig from './config/firebase.config.js';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import store from '@/Vuex/store.js';

import './assets/styles/global.css';
import {registerComponent} from './config/import.js';

//initialized firebase
initializeApp(firebaseConfig);

const app = createApp(App);

//vuex stores
app.use(store);

//fontawesome
library.add(fas, fab, far)

app.component('fa', FontAwesomeIcon)

registerComponent(app);

app.use(router);

app.mount('#app');
