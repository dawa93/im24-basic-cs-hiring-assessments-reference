import React, { Component } from "react";
import FishTableRow from "./FishTableRow";

//TODO: FishTable will have many FishTableRows
const FishTable = ({fishes}) => (
	<div>
	{
		fishes.map( (ele) => (
			<FishTableRow key={ele.toString()} fish={ele} />
			)
		)
	}
	</div>
    )
    
export default FishTable;
