import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { StyledFavouriteBtn } from "../SearchResults.Styled";

export const FavouriteBtn = ({ flat }) => {
  const [newFavourite, setNewFavourite] = useState(true);
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  const handleFavourite = () => {
    setNewFavourite(!newFavourite);
    updateFavourites();
  };
  const updateFavourites = () => {
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    if (newFavourite == true) {
      favourites.push(flat);
    } else {
      favourites.splice(
        favourites.indexOf(
          favourites.find((el) => {
            if (el.id === flat.id) {
              return el;
            }
          }),
          1
        )
      );
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  useEffect(() => {
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    favourites?.forEach((favourite) =>
      favourite.id == flat.id && newFavourite
        ? setNewFavourite(!newFavourite)
        : newFavourite
    );
  }),
    [];
  return (
    <StyledFavouriteBtn>
      <Button className="likeIcon" onClick={handleFavourite}>
        {/* zmiana koloru w zależnosci od stanu */}
        {/* {newFavourite ? "♡" : "❤"} */}
        <FontAwesomeIcon c icon={faThumbsUp} className="fal fa-user"></FontAwesomeIcon>
      </Button>
    </StyledFavouriteBtn>
  );
};
