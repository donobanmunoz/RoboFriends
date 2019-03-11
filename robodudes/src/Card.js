import React from "react";
//this is needed to import react so that it can read JSX syntax 	
const Card = ({name, email, id, userName}) => {
//onst {name, email, id} = props;
	return (

		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 dim'>
		 <img alt="robots" src={`https://robohash.org/${id}?100x100`}/>
		 <div>
		  <h2>{name}</h2>
		  <p>{email}</p>
		  <p>{userName}</p>
		 </div>
		</div>
		);
}

export default Card;