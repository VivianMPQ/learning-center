<template>
  <div></div>
</template>

<script>
import { TutorialsApiService } from "../services/tutorials-api-service";
import { FilterMatchMode } from "primevue/api";

export default {
  name: "tutorial-list.component",
  data() {
    return {
      tutorials: [],
      //el dialogó siempre está, pero si está en false se hace visible
      tutorialDialog: false,
      deleteTutorialDialog: false,
      tutorial: {},
      selectedTutorials: null,
      submitted: false,
      statuses: [
        { label: "Published", value: true },
        { label: "Unpublished", value: false },
      ],
      tutorialsService: null,
    };
  },

  created() {
    this.tutorialsService = new TutorialsApiService();
    this.tutorialsService.getAll().then((response) => {
      this.tutorials = response.data;
      this.tutorials.forEach(
        (tutorial) =>
          (tutorial.published = this.tutorial.published
            ? "Published"
            : "Unpublished")
      );
      console.log("created");
    });
    this.initFilters();
  },

  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    //devuelve el indice
    findIndexById(id) {
      return this.tutorials.findIndex((tutorial) => tutorial.id === id);
    },
    openNew() {
      this.tutorial = {};
      this.submitted = false;
      //cambia a true para que apresca el dialogo
      this.tutorialDialog = true;
    },
    hideDialog() {
      this.tutorialDialog = false;
      this.submitted = false;
    },
    saveTutorial() {
      this.submitted = true;
      if (this.tutorial.title.trim()) {
        if (this.tutorial.id) {
          this.tutorial.published = this.tutorial.published.value
            ? this.tutorial.published.value
            : this.tutorial.published;
          this.tutorialsService
            .update(this.tutorial.id, this.tutorial)
            .then((response) => {
              this.tutorial[this.findIndexById(this.tutorial.id)] =
                this.tutorial;
              //agregamos un toast para que aprezac un mensaje bonito
              //mensaje success
              this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Tutorial Updated",
                life: 3000,
              });
              console.log(response);
            });
        } else {
          this.tutorial.id = 0;
          this.tutorial.published = this.tutorial.value
            ? this.tutorial.published.value
            : this.tutorial.published;
          this.tutorialsService.create(this.tutorial).then((response) => {
            this.tutorial.id = response.data.id;
            this.tutorials.push(this.tutorial);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Tutorial Created",
              life: 3000,
            });
            console.log(response);
          });
        }
      }
      this.tutorialDialog = false;
      this.tutorial = {};
    },

    editTutorial(tutorial) {
      this.tutorial = { ...tutorial };
      this.tutorialDialog = true;
    },
    confirmDeleteTutorial(tutorial) {
      this.tutorial = tutorial;
      this.deleteTutorialDialog = true;
    },

    //para eliminar
    deleteTutorial() {
      this.tutorialsService.delete(this.tutorial.id).then((response) => {
        this.tutorial = this.tutorial.filter((t) => t.id !== this.tutorial.id);
        this.deleteTutorialDialog = false;
        this.tutorial = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Tutorial Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
  },
};
</script>

<style scoped></style>
