<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add A New Director</p>
                <button v-on:click="closeModal()" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <form>
                    <div >
                        <input id="new-director-first-name" required class="input is-primary director-name" type="text" maxlength="50" placeholder="Director First Name" v-model="newDirector.firstName"><br/><br/>
                        <input id="new-director-last-name" required class="input is-primary director-name" type="text" maxlength="50" placeholder="Director Last Name" v-model="newDirector.lastName"><br/><br/>
                        <input id="new-director-birth-year" required class="input is-primary director-year" type="number" minlength="4" maxlength="4" min=1900  placeholder="Director Year of Birth" v-model="newDirector.yearOfBirth"> 
                    </div>
                </form>
            </section>
            <footer class="modal-card-foot">
                <button id="submit-new-director" v-on:click.prevent="submitNewDirectorForm()" class="button is-success">Save changes</button>
                <button v-on:click="closeModal()" class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
import {api_addNewDirector} from "../api.js";

export default {
    name: "new-director-form",
    props:['isShowing'],
    data(){
        return{
            newDirector: {
                "directorId":0,
                "firstName":"",
                "lastName":"",
                "yearOfBirth":""
            }
        }
    },
    methods: {
        closeModal(){
            this.$emit('closeModal');
        },
        async submitNewDirectorForm(){
            await api_addNewDirector(this.newDirector);
            this.$emit('closeModal');
        }
    }
}

</script>

<style>
.director-name{
    width: 60%;
}
.director-year{
    width: 25%;
}


</style>