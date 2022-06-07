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
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Sidebar from "primevue/sidebar";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";

const app = createApp(App);
//routing management
app.use(router);
//add prime vue configuration
app.use(PrimeVue, { ripple: true });
//toast service
app.use(ToastService);

//primevue components -> de Datatable a pv-date-table
//cambiando nombre
app.component(`pv-data-table`, DataTable);
app.component(`pv-column`, Column);
app.component(`pv-button`, Button);
app.component(`pv-toolbar`, Toolbar);
app.component(`pv-dialog`, Dialog);
app.component(`pv-input-text`, InputText);

app.component(`pv-toast`, Toast);
app.component(`pv-sidebar`, Sidebar);
app.component(`pv-dropdown`, Dropdown);
app.component(`pv-tag`, Tag);

app.mount("#app");
