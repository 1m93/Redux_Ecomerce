import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

function Item(props) {
	const [product] = useState(props.product);

	const displayRate = (rate) => {
		let stars = [];
		for (let i = 0; i < rate; i++) {
			stars.push(
				<span className="star" key={i}>
					<FontAwesomeIcon icon={fasStar} />
				</span>
			);
		}
		for (let i = 0; i < 5 - rate; i++) {
			stars.push(
				<span className="star" key={5 - i}>
					<FontAwesomeIcon icon={farStar} />
				</span>
			);
		}
		return stars;
	};

	return (
		<div className="products__list-item">
			<div className="products__list-item-head">
				<div
					className="products__list-item-img"
					style={{ background: `url(${product.image}) no-repeat center` }}
				></div>
				<h5 className="products__list-item-title">{product.name}</h5>
				<p className="products__list-item-describe">{product.description}</p>
			</div>
			<div className="products__list-item-foot">
				<div className="products__list-item-rate">
					{displayRate(product.rate)}
				</div>
				<h5 className="products__list-item-price">${product.price}</h5>
			</div>
		</div>
	);
}

export default Item;
