<template>
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Director Information</p>
      <button v-on:click="closeModal()" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <form>
        <div >
            <input id="edit-director-first-name" required class="input is-primary director-name" type="text" maxlength="50" placeholder="Director First Name" v-model="directorToEdit.firstName"><br/><br/>
            <input id="edit-director-last-name" required class="input is-primary director-name" type="text" maxlength="50" placeholder="Director Last Name" v-model="directorToEdit.lastName"><br/><br/>
            <input id="edit-director-birth-year" required class="input is-primary director-year" type="number" minlength="4" maxlength="4" min=1900  placeholder="Director Year of Birth" v-model="directorToEdit.yearOfBirth"> 
        </div>
    </form>
    </section>
    <footer class="modal-card-foot">
      <button id="submit-edited-director" v-on:click="submitChanges(directorToEdit)" class="button is-success">Save changes</button>
      <button v-on:click="closeModal()" class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import { api_putDirectors} from "../api.js";

export default {
    name:'edit-director-modal',
    props:['directorToEdit'],
    methods: {
      closeModal(){
        this.$emit('closeModal');
      },
      async submitChanges(payload){
        await api_putDirectors(payload)
          .then(this.closeModal());
      }
    }
}
</script>

<style>

</style>