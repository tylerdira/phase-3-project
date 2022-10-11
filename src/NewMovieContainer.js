import React from "react";

function NewMovieContainer({newPost, currentUser, title, genre, rating, comments, setTitle, setGenre, setRating, setComments}) {

  

  const formHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/favorites', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          genre: genre, 
          rating: rating, 
          comments: comments,
          user_id: currentUser
        }),
    })
    .then(r => r.json())
    .then(aNewPost => {
      newPost(aNewPost);
      setTitle('');
      setGenre('');
      setRating('');
      setComments('');
    })
  }
    return (
      <div className="container">
       <h2>New Movie</h2>
       <div className="row">
        <div className="col-5">
          <form className="new_movie_form" onSubmit={formHandler}>
            <label> Title: </label>
              <input className="form-control" onChange={e => setTitle(e.target.value)} value={title}></input> <br />
            <label> Genre: </label>
              <input className="form-control" onChange={e => setGenre(e.target.value)} value={genre}></input> <br />
            <label> Rating: </label>
              <input className="form-control" onChange={e => setRating(e.target.value)} value={rating}></input> <br />
            <label> Comments: </label>
              <input className="form-control" onChange={e => setComments(e.target.value)} value={comments}></input> <br />
            <button className="btn btn-primary" type='submit'> Add To Favorites</button>
          </form>
        </div>
       </div>
       
       
      </div>
    );
  }

  export default NewMovieContainer;