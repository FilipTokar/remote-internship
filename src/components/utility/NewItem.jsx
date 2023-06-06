import React from "react";
import { Link } from "react-router-dom";

function NewItem({newItem, countdowns}) {
  return (
    
      <div className="nft__item">
        <div className="author_list_pp">
          <Link
            to="/author"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img className="lazy" src={newItem.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>

        {countdowns[newItem.id] ? (
          <div className="de_countdown">
            {countdowns[newItem.id].hours}h {countdowns[newItem.id].minutes}m{" "}
            {countdowns[newItem.id].seconds}s
          </div>
        ) : null}

        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <Link to="/item-details">
            <img
              src={newItem.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{newItem.title}</h4>
          </Link>
          <div className="nft__item_price">{newItem.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{newItem.likes}</span>
          </div>
        </div>
      </div>
    
  );
}

export default NewItem;