<template>
  <div id="moviesTable">
    <button id="new-movie-form-button" class="button is-primary is-rounded" v-if="!newDirectorForm" v-on:click="createNewMovie()">Add New Movie</button>
    <NewForm v-if="showNewForm" 
      :directors="directors"
      v-on:updateInformation="updateAllInformation()" 
      v-on:toggle="createNewMovie()"/>
    <br/>
    <EditMovieModal 
      :selectedMovie="selectedMovie" 
      :directors="directors" 
      v-if="editMovieInfo" 
      v-on:someEvent="showModal()" 
      v-on:updateMovies="updateAllInformation()"/>
    <table class="table table-dark table-striped table-hover">
      <thead class="thead-light">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Release Year</th>
          <th>Academy Award</th>
          <th>Director Name</th>
          <th style="min-width: 120px" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :movies="movies" :key="movie.ID" >
          <td>{{ movie.name }}</td>
          <td>{{ movie.description }}</td>
          <td>{{ movie.releaseYear }}</td>
          <td>{{ movie.academyAward }}</td>
          <td>
            <ul>
              <li class="director-row" v-for="director in movie.director" :key="director.directorId">-{{director.firstName}} {{director.lastName}}</li>
              </ul>
            <br/>
            </td>
          <td>
            <span :id="'edit-movie-'+movie.id" class="clickable m-2" v-on:click="updateMovieInfo(movie)" >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </span>
            <span :id="'delete-movie-'+movie.id" class="clickable m-2" v-on:click="deleteMovie(movie)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </span>
          </td>
        </tr> 
      </tbody>
    </table>
  </div>
</template>

<script>
import { api_getAll, api_delete, api_getAllDirectors} from "../api.js";
import EditMovieModal from './EditMovieModal.vue';
import NewDirectorForm from './NewDirectorForm.vue';
import NewForm from './NewForm.vue';

export default {
  components: { EditMovieModal, NewDirectorForm, NewForm},
  props: ['movies', 'directors'],
  data() {
    return {
      showNewForm: false,
      editMovieInfo: false,
      newDirectorForm: false,
      clickedMovieId: 0,
      selectedMovie: {
              "id": 0,
              "name": "",
              "description": "",
              "releaseYear": 0,
              "academyAward": true,
              "director": []  
            },
    };
  },
  async mounted() {
     await this.getMovies(); 
     await this.getDirectors();   
   },
  methods: {
    async updateAllInformation(){
      this.$emit('updateInformation');
    },
    showModal(){
      this.editMovieInfo = !this.editMovieInfo;
    },
    updateMovieInfo(movie) {
      this.selectedMovie = movie;
      this.editMovieInfo = true;
    },
    async deleteMovie(movie){
      if(confirm("Are you sure you want to delete this movie?")){
        alert(`Deleting movie "${movie.name}"`);
        await api_delete(movie.id);
        this.$emit('updateInformation');
      }
    },
    async getMovies() {
      let response = await api_getAll();
      console.log("ayo");
      this.movies = response;
      this.showNewForm = false;
    },
    async getDirectors(){
      let response = await api_getAllDirectors();
      this.directors = response;
    },
    createNewMovie(){
      this.showNewForm = !this.showNewForm;
    }
  },
};
</script>

<style scoped>
.director-row{
  display: block;
}
.clickable {
  cursor: pointer;
  user-select: none;
}
</style>
