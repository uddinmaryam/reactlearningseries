import React, {useState} from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const handleClick = () => {
        setLikes(likes + 1);
    };
    return (
        <div>
            <button onClick={handleClick}>Like</button>
            <p>Likes:{likes}</p>
        </div>
    );
}
export default LikeButton;