import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(starValue) {
    setHover(starValue);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  function setStarColor(starRating) {
    if (starRating <= rating) return "yellow";
    if (starRating <= hover) return "gold";

    return "black";
  }

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            style={{
              color: setStarColor(starValue),
            }}
            size={40}
          />
        );
      })}
    </div>
  );
}
