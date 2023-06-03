<template>
    <div id="directorstable">
        <EditDirectorModal 
            :directorToEdit="directorToEdit" 
            v-if="isShowingEditModal"
            v-on:closeModal="closeModalView()"/> 
        <NewDirectorForm 
            v-on:closeModal="closeModalView()" 
            :isShowing="isShowing"
            v-if="isShowingNewDirectorForm"/>
        <button id="add-new-director" class="button is-primary is-rounded" v-on:click="displayNewDirectorForm()">Add New Director</button>
        <table class="table table-dark table-striped table-hover">
        <thead class="thead-light">
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth Year</th>
            <th>Academy Awards</th>
            <th style="min-width: 120px" scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="director in directors" :directors="directors" :key="director.ID" >
            <td>{{ director.director.firstName }}</td>
            <td>{{ director.director.lastName }}</td>
            <td>{{ director.director.yearOfBirth }}</td>
            <td>{{director.numberOfAwards}}</td>
            <td>
                <span :id="'edit-director-'+director.director.directorId" class="clickable m-2" v-on:click="updateDirector(director)" >
                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </span>
                <span :id="'delete-director-'+director.director.directorId" class="clickable m-2" v-on:click="deleteDirector(director)">
                <font-awesome-icon icon="fa-solid fa-trash" />
                </span>
            </td>
            </tr> 
        </tbody>
        </table>
  </div>
</template>

<script>
import { api_getAllDirectors, api_deleteDirector} from "../api.js";
import EditDirectorModal from './EditDirectorModal.vue';
import NewDirectorForm from './NewDirectorForm.vue';

export default {
    props: ['directors'],
    async mounted() {
    },
    data() {
        return {
            isShowingNewDirectorForm: false,
            isShowingEditModal: false,
            directorToEdit: {
                "directorId": "",
                "firstName": "",
                "lastName": "",
                "yearOfBirth": ""
            }
        }
    },
    components: {EditDirectorModal, NewDirectorForm},
    methods: {
        async closeModalView(){
            this.isShowingNewDirectorForm = false;
            this.isShowingEditModal = false;
            this.$emit('updateInformation');
        },
        displayNewDirectorForm(){
            this.isShowingNewDirectorForm = !this.isShowingNewDirectorForm;
        },
        updateDirector(director){
            console.log(director);
            this.directorToEdit = director.director;
            this.isShowingEditModal = true;
        },
        async deleteDirector(director){
            const directorName = `${director.director.firstName} ${director.director.lastName}`
            if(confirm(`Are you sure you want to delete the director: ${directorName} ?`)){
                alert(`${directorName} is being deleted.`);
                await api_deleteDirector(director.director.directorId);
                this.$emit('updateInformation');
            }
            else{
                alert(`${directorName} will not be deleted.`)
            }
        }
    }
}
</script>

<style>

</style>