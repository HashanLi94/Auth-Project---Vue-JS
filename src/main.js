import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// layouts
import CommonLayout from './components/layouts/CommonLayout.vue';
import AuthLayout from './components/layouts/AuthLayout.vue';



// primevue
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

// import primevue components
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Card from 'primevue/card';
import Button from 'primevue/button';


const app =  createApp(App)
app.use(store);
app.use(router);
app.use(PrimeVue);
app.mount('#app');

// Use Layouts
app.component('commonLayout', CommonLayout);
app.component('authLayout', AuthLayout);

// use primevue components
app.use(PrimeVue, {
    zIndex: {
        modal: 1100,        //dialog, sidebar
        overlay: 1000,      //dropdown, overlaypanel
        menu: 1000,         //overlay menus
        tooltip: 1100       //tooltip
    }
});
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Card', Card);
app.component('Button', Button);
