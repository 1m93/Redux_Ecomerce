import React from "react";
import "../../sass/style.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

function Rate({ handleRateSelect, rate }) {
	const ratings = [5, 4, 3, 2, 1];

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
		<div className="rate">
			<h5 className="rate__title">Ratings</h5>
			{ratings.map((item) => (
				<small
					className="rate__star"
					key={item}
					onClick={() => {
						handleRateSelect(!rate ? item : "");
					}}
					style={item === rate ? {fontWeight: 700, color: "black"} : {}}
				>
					{displayRate(item)} & Up
				</small>
			))}
		</div>
	);
}

export default Rate;
