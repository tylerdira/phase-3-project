import React, {useState} from "react";

function EditCommentForm ({favorites, comments, setComments}) {

    const [newComment, setNewComment] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/favorites/${favorites.id}` , {
            method: 'PATCH',
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                comments: newComment,
            }),
        })
        .then(r => r.json())
        .then(updatedComment => setNewComment(updatedComment))
        .then(window.location.reload())

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Updated Comment: </label>
                <input onChange={e => setNewComment(e.target.value)} value={newComment}></input>
                <button className="btn btn-primary" type="submit">submit</button>
            </form>
            
        </div>
    )
}

export default EditCommentForm;