<template>
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add A New Movie</p>
      <button @click="toggleModal()" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
        <form>
      <div>
        <input id="new-movie-name" required class="input is-rounded" maxlength="50" type="text" placeholder="Name" v-model="newMovie.name">
      </div> <br/>
      <div>
        <textarea id="new-movie-description" required class="textarea"  maxlength="500" rows="4" cols="50" placeholder="Description" v-model="newMovie.description"/>
      </div> <br/>
      <div>
        <input required id="new-movie-release-year" class="input is-rounded" style="width: 25%;" maxlength="4" minlength="4" type="number" min="1900" max="2099" placeholder="Year" v-model="newMovie.releaseYear">
      </div> <br/>
      <div>
        <p>Received an Academy Award?</p>
        <input required type="radio" id="yesAward" :value="true" name="award" v-model="newMovie.academyAward">
        <label for="yesAward">Yes</label>
        <br/>
        <input type="radio" id="noAward" :value="false" name="award" v-model="newMovie.academyAward">
        <label for="noAward">No</label>
      </div>
      <br/>
      <h3>Directors:</h3>
      <div v-for="item in directors" :key="item.directorId">
        <input type="checkbox" :id="'checkbox-'+item.director.firstName+'-'+item.director.lastName" v-model="newMovie.director" :value="item.director">
        <label :for="'checkbox-'+item.director.firstName+'-'+item.director.lastName">{{item.director.firstName}} {{item.director.lastName}}</label>
      </div> <br/>
      <form>
          <div v-for="(inputTag, index) in inputTags" :key="index">
            <input id="new-movie-director-first-name" type="text" style="width: 30%;" class="input is-rounded" maxlength="50" placeholder="Director First Name" v-model="newDirector.firstName">
            <input id="new-movie-director-last-name" type="text" style="width: 30%;" class="input is-rounded" maxlength="50" placeholder="Director Last Name" v-model="newDirector.lastName">
            <input id="new-movie-director-birth-year" type="number" style="width: 30%;" class="input is-rounded" minlength="4" maxlength="4" min=1900  placeholder="Year of Birth" v-model="newDirector.yearOfBirth">  
        </div>
      </form><br/>
      <button id="add-new-director-button" class="button is-info is-rounded" v-on:click.prevent="addANewDirector()">Add New Director</button>
      <br /><br />
      
    </form> 
    </section>
    <footer class="modal-card-foot">
      <button id="submit-new-movie-button" class="button is-success" v-on:click.prevent="submitNewMovieForm()">Submit</button>
      <button @click="toggleModal()" class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
import { api_post, api_getAllDirectors, api_addNewDirector } from '../api';
import NewDirectorForm from './NewDirectorForm.vue';

export default {
    components: {NewDirectorForm},
    name: "new-movie-form",
    props: ['directors'],
    data(){
        return {
            inputTags:[
              {
                "firstName": "",
                "lastName": "",
                "yearOfBirth": ""
              }
            ],
            showNewDirectorForm: false,
            newDirector: {
                "firstName":"",
                "lastName":"",
                "yearOfBirth":""
            },
            newMovie: {
            "id": 0,
            "name": "",
            "description": "",
            "releaseYear": "",
            "academyAward": false,
            "director": []
            }
        }
    },
    methods: {
      async addANewDirector(){
        await api_addNewDirector(this.newDirector);
        this.$emit('updateInformation')
        this.newDirector = {}
      },
      toggleModal(){
        this.$emit('toggle');
      },
      async submitNewMovieForm(){
        this.newMovie.academyAward === "true" ? true : false;
        await api_post(this.newMovie);
        this.$emit('updateInformation');
        this.toggleModal();
      }
    }
}
</script>

<style>
.input{
  width: 100px;
}
.clickable {
  cursor: pointer;
  user-select: none;
}

</style>