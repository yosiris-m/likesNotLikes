import { useState } from "react";
import "./ItemDetails.scss";
import { sendLikes } from "../services/api";
import { LikedSvg } from "../icons/LikedSvg";
import { PriceTriangleSvg } from "../icons/PriceTriangleSvg";
import { RepostSvg } from "../icons/RepostSvg";

export function ItemDetails({ item }) {
  const [likesCount, setLikesCount] = useState(item.likesCount);
  const [isLiked, setIsLiked] = useState(item.isLiked);

  const addLike = () => {
    const newLikes = likesCount + 1;
    setLikesCount(newLikes);
    sendLikes(item.id);
    setIsLiked(true);
  };

  const removeLike = () => {
    const removeLike = likesCount - 1;
    setLikesCount(removeLike);
    setIsLiked(false);
  };

  return (
    <section className="item-details">
      <div className="item-details__image-container">
        <div className="item-details__price-bg">
          <PriceTriangleSvg />
        </div>
        <div className="item-details__price">
          <span>{item.price}</span>
          <span className="item-details__currency">€</span>
        </div>

        <img
          src={item.image}
          alt={item.title}
          className="item-details__image"
        />
      </div>

      <section className="item-info">
        <h1 className="item-info__title">{item.title}</h1>
        <p className="item-info__subtitle">
          <span className="item-info__by">by</span> {item.author}
        </p>
        <div className="item-actions">
          <div className="item-actions__like-container">
            <p className="item-actions__likes-count">
              {likesCount.toString().padStart(3, "0")}
            </p>
            {isLiked ? (
              <span onClick={removeLike} className="item-actions__like-img">
                <LikedSvg />
              </span>
            ) : (
              <span
                onClick={addLike}
                className="item-actions__like-img--selected"
              >
                <LikedSvg />
              </span>
            )}
          </div>
          <div className="item-actions__repost">
            <RepostSvg />
            <span className="item-actions__repost-counter">000</span>
          </div>
        </div>
      </section>
    </section>
  );
}
