import { useState } from "react";

export default function LikeButton() {
  let [isLike, setisLike] = useState(false); // when state is true then fill solid-heart icon and if false the state  then regular-heart icon

  let toggleBtn = () => {
    setisLike(!isLike);
    console.log("Clicked");
  };

  return (
    <>
      <div>
        <p onClick={toggleBtn}>
          {" "}
          {!isLike ? (
            <i className="fa-regular fa-heart"></i>
          ) : (
            <i className="fa-solid fa-heart"></i>
          )}{" "}
        </p>
      </div>
    </>
  );
}
