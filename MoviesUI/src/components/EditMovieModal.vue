<template>
  <div  class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit "{{selectedMovie.name}}" Information</p>
          <button v-on:click="closeModalView()" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <form>
            <div>
              <input id="edit-movie-name" class="input is-primary" required type="text" placeholder="Name" v-model="selectedMovie.name">
            </div> <br/>
            <div>
              <textarea id="edit-movie-description" required rows="4" cols="60" placeholder="Description" v-model="selectedMovie.description"/>
            </div> <br/>
            <div>
              <input id="edit-movie-release-year" class="is-rounded" required type="number" min="1900" max="2099" placeholder="Year" v-model="selectedMovie.releaseYear">
            </div> <br/>
            <div>
              <p>Received an Academy Award?</p>
              <input required type="radio" id="yesAward" :value="true" name="award" v-model="selectedMovie.academyAward">
              <label for="yesAward">Yes</label>
              <br/>
              <input type="radio" id="noAward" :value="false" name="award" v-model="selectedMovie.academyAward">
              <label for="noAward">No</label>
            </div>
            <br/><h4>Directors:</h4>
            <div v-for="director in directors" :key="director.directorId">
              <input :id="'edit-checkbox-'+director.firstName+'-'+director.lastName" type="checkbox" v-model="selectedMovie.director" :value="director.director" checked/>
              <label :for="'edit-checkbox-'+director.firstName+'-'+director.lastName">{{director.director.firstName}} {{director.director.lastName}}</label>
          </div>
          </form> <br/>
        </section>
        <footer class="modal-card-foot">
          <button id="submit-edited-movie" v-on:click.prevent="submitUpdatedMovieInfo(selectedMovie)" class="button is-success">Save changes</button>
          <button v-on:click="closeModalView()" class="button">Cancel</button>
        </footer>
      </div>
    </div>
</template>

<script>
import { api_put } from '../api';

export default {
    name:'edit-movie-modal',
    props:['selectedMovie', 'directors'],
    methods: {
      async submitUpdatedMovieInfo(selectedMovie){
        await api_put(selectedMovie);
        this.closeModalView();
        this.$emit('updateMovies');
      },
      closeModalView(){
        this.$emit('someEvent')
      }
    }
}
</script>

<style>

</style>