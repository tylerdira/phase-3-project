import FavoriteMovie from "./favoriteMovie";


function FavoritesList({favorites, handleDelete, comments, setComments}) {

    
    return (
      <div>
        <h3>Favorites List</h3>
        {favorites.map(favorite => < FavoriteMovie key={favorite.id} handleDelete={handleDelete} setComments={setComments} comments={comments} favorites={favorite}/>)}

        
      </div>
    );
  }

  export default FavoritesList;