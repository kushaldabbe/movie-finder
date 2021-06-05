//create a return statement, with divs and i tag(for "go back" button)
//add a span tag, add some styles to it
//add onClick functionality and add props to the div so that we can go back when clicked
//also add some styles to that div
//Then we add the Overview and Image of that movie component
//check if it has a image otherwise add default image just like we did before

//Create another div for the information of the movie inside some <p> tags

//change the date format at last

import React from 'react';

function swap(arr,from,to){
  arr.splice(from,1,arr.splice(to,1,arr[from])[0]);
}

const MovieInfo = (props) => {
  return(
    <div className="container">
      <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
          <i className="fas fa-arrow-left"></i>
          <span style={{marginLeft: 10}}>Go Back</span>
      </div>
      <div className="row">
          <div className="col s12 m4">
          {props.currentMovie.poster_path === null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image" style={{width: "100%",
             height: 360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{width: "100%", height: 360}}/>}
          </div>
          <div className="col s12 m8">
              <div className="info-container">
                  <p>{props.currentMovie.title}</p>
                  <p>{props.currentMovie.release_date}</p>
                  <p>{props.currentMovie.overview}</p>
              </div>
          </div>
      </div>

    </div>
  )
}

export default MovieInfo;
