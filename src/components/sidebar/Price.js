import React, { useState } from "react";
import "../../sass/style.sass";

function Price({ handleFromSelect, handleToSelect, from, to }) {
	const [fromInput, setFromInput] = useState("");
	const [toInput, setToInput] = useState("");

	const priceStep = [];
	const priceNodes = [1, 80, 160, 240, 1820, 3400, 4980];

	for (var i = 0; i < priceNodes.length - 1; i++) {
		let temp = {
			id: i + 1,
			from: priceNodes[i],
			to: priceNodes[i + 1],
		};
		priceStep.push(temp);
	}

	const handlePriceClick = (from, to) => {
		handleFromSelect(from);
		handleToSelect(to);
		setFromInput(from)
		setToInput(to)
	};

	return (
		<div className="price">
			<h5 className="price__title">Price</h5>
			{!from && !to ? (
				<div>
					<div className="price__value">
						<small
							onClick={() => {
								handlePriceClick("", 1);
							}}
						>
							≤ $1
						</small>
					</div>
					{priceStep.map((item) => (
						<div className="price__value" key={item.id}>
							<small
								onClick={() => {
									handlePriceClick(item.from, item.to);
								}}
							>
								${item.from} - ${item.to}
							</small>
						</div>
					))}
					<div className="price__value">
						<small
							onClick={() => {
								handlePriceClick(4980, "");
							}}
						>
							≥ $4980
						</small>
					</div>
				</div>
			) : (
				<div>
					<div className="price__value">
						<small
							onClick={() => {
								handlePriceClick("", "");
							}}
						>
							{from && to
								? `$${from} - $${to}`
								: from && !to
								? `≥ $${from}`
								: `≤ $${to}`}
						</small>
					</div>
				</div>
			)}
			<form
				className="price__form"
				onSubmit={(event) => {
					handlePriceClick(fromInput, toInput);
					event.preventDefault();
				}}
			>
				<div className="price__form-input">
					<label>$</label>
					<input
						type="number"
						name="from"
						onChange={(value) => setFromInput(value.target.value)}
						value={fromInput}
					/>
				</div>
				<span>to</span>
				<div className="price__form-input">
					<label>$</label>
					<input
						type="number"
						name="to"
						onChange={(value) => setToInput(value.target.value)}
						value={toInput}
					/>
				</div>
				<button type="submit" className="price__form-btn">
					GO
				</button>
			</form>
		</div>
	);
}

export default Price;
