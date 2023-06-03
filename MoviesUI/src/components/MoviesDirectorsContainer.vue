<template>
    <div>
        <button id="toggle-movies-directors" @click="toggleTableViews()" class="button is-link is-rounded">{{isShowingDirectorsTable ? "Show Movies Table" : "Show Directors Table"}}</button>
        <br/>
        <br/>
        <MoviesTable 
            v-on:updateInformation="getMoviesAndDirectors()" 
            v-if="isShowingMoviesTable"
            :movies="movies"
            :directors="directors"/>
        <DirectorsTable :directors="directors" v-on:updateInformation="getMoviesAndDirectors()" v-if="isShowingDirectorsTable"/>
        <br/>
    </div>
</template>

<script>
import MoviesTable from './MoviesTable.vue'
import DirectorsTable from './DirectorsTable.vue'
import NewForm from './NewForm.vue'
import { api_getAllDirectors, api_getAll} from "../api.js";

export default {
    async mounted(){
        await this.getMoviesAndDirectors();
    },
    name: 'movies-directors-container',
    components: {MoviesTable, DirectorsTable, NewForm},
    data(){
        return {
            showNewForm: false,
            isShowingMoviesTable: true,
            isShowingDirectorsTable: false,
            movies: [],
            directors: [],
        }
    },
    methods: {
        toggleTableViews(){
            this.isShowingMoviesTable = !this.isShowingMoviesTable;
            this.isShowingDirectorsTable = !this.isShowingDirectorsTable;
        },
        async getMoviesAndDirectors(){
            const movieResponse = await api_getAll();
            this.movies = movieResponse;
            const directorResponse = await api_getAllDirectors();
            this.directors = directorResponse;
        }
    }
}
</script>

<style>
.new-form{
    z-index: 1;
}
</style>