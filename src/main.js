import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//importamos un thema de primevue
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

const app = createApp(App);

app.use(router);
//add prime vue configuration
app.use(PrimeVue, { ripple: true });

//primevue components -> de Datatable a pv-date-table
//cambiando nombre
app.component(`pv-data-table`, DataTable);
app.component(`pv-column`, Column);
app.component(`pv-button`, Button);
app.component(`pv-toolbar`, Toolbar);
app.component(`pv-dialog`, Dialog);
app.component(`pv-input-text`, InputText);

app.mount("#app");
