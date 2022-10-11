import EditCommentForm from "./EditCommentForm";
import React, {useState} from "react";

function FavoriteMovie({favorites, handleDelete, comments, setComments}) {

    const [showForm, setShowForm] = useState(false)

    function handleClick() {
        setShowForm(!showForm)
    }
    
    return (
        <div className="movie_list">
            <h4>Movie: {favorites.title}</h4>
            <p>Genre: {favorites.genre}</p>
            <p>Rating: {favorites.rating}/10</p>
            <p>Comments: "{favorites.comments}"</p>
            <button className="btn btn-danger" onClick={(e) => {
                e.stopPropagation();
                handleDelete(favorites.id)
            }}>Remove From Favorites</button>
            <button className="btn btn-primary" onClick={handleClick}>Edit comment</button>
            {showForm ? <EditCommentForm setComments={setComments} comments={comments} favorites={favorites}/> : null }
        </div>
    );
}

export default FavoriteMovie;