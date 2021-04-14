import React, { useState } from "react";
import { UserCard } from "./Components/UserCard";
import { useFetch } from "./Hooks/useFetch";

const App = () => {

	
    const [state] = useState(1)


  
	const url = `https://reqres.in/api/users/${state}`;

	const { loading } = useFetch(url);


	return (
		<div className="container p-1 p-lg-4 d-flex justify-content-center row">
			{loading ? (
				<div className=" alert-info">Loading....</div>
			)
			 :
			
			(
				<>

				<UserCard  />
				<UserCard  />
				<UserCard  />
				
				</>
			)}
		</div>
	);
};

export default App;
