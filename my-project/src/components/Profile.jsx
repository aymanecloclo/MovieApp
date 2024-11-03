import React, { Component } from 'react';
import ShowFilmsCard from '../components/ShowFilmsCard'
import ListCategories from '../components/ListCategories'

const API_KEY = '3a04bd935b4c76613fdcb308995e1a2f'; 
const GENRES_API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

class Profile extends Component {
  state = { 
    genres: []
    
    , movies: [] };
  
  fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    this.setState({ movies: data.results });
  }

   handleClick=(id)=>{
       
   }
  fetchGenres = async () => {
    const response = await fetch(GENRES_API_URL);
    const data = await response.json();
    this.setState({ genres: data.genres });
  }

  componentDidMount() {
    this.fetchMovies();
    this.fetchGenres();
  }

  render() { 
    return (
      <>
   
        <div className="flex gap-0">
         
          <ListCategories genres={this.state.genres}  />
          <ShowFilmsCard data={this.state.movies} />
        </div>
      </>
    );
  }
}

export default Profile; 
