import './af4irl.css';
import React, {useState, useEffect} from "react";
import UsersContainer from './UsersContainer';
import NewMovieContainer from './NewMovieContainer';
import FavoritesList from './FavoritesList';

function App() {

  const [favorites, setFavorites] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [users, setUsers] = useState([])
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')
  const [comments, setComments] = useState('')

  useEffect(() => {
    fetch(`http://localhost:9292/favorites/${currentUser}`)
    .then(r => r.json())
    .then((data) => setFavorites(data))
  }, [currentUser])
    
    

    useEffect(() => {
      fetch('http://localhost:9292/users')
      .then(r => r.json())
      .then(setUsers)
  }, [])

    const newPost = (newPost) => {
      setFavorites(favorites => [...favorites, newPost])
    }

    const newUser = (newUser) => {
      setUsers(users => [...users, newUser])
    }

    const handleDelete = (movieId) => {
      fetch(`http://localhost:9292/favorites/${movieId}`, { method: 'DELETE'})
      setFavorites(favorites.filter(movie => movie.id != movieId))
    }
  return (
    <div className="App">
      <UsersContainer setFavorites={setFavorites} setCurrentUser={setCurrentUser} currentUser={currentUser} newUser={newUser} users={users} setUsers={setUsers} />
      <NewMovieContainer currentUser={currentUser} title={title} genre={genre} rating={rating} comments={comments} setTitle={setTitle} setGenre={setGenre} setRating={setRating} setComments={setComments} newPost={newPost}/>
      <FavoritesList setComments={setComments} comments={comments} handleDelete={handleDelete} favorites={favorites} />
    </div>
  );
}

export default App;
