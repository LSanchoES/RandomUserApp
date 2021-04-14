import React, { useState } from "react";
import { useFetch } from "./Hooks/useFetch";

const App = () => {

    const [state, setState] = useState(1)

    const handleClick = () =>{

       setState( Math.floor(Math.random() * 12)+1);
       
    }
  
	const url = `https://reqres.in/api/users/${state}`;

	const { datos: data, loading } = useFetch(url);


	return (
		<div className="container p-5 d-flex justify-content-center flex-column">
			{loading ? (
				<div className=" alert-info">Loading....</div>
			) : (
				<div
					className="card border border-green p-3 d-flex justify-content-center
           text-center animate__animated animate__rotateInDownLeft"
					style={{ maxWidth: 300 }}
				>
					<h1 className="card-title">{data.first_name}</h1>
					<hr></hr>
					<p className="card-text">
						User number:<b> {data.id} </b>
					</p>
					<p className="card-text">
						Last name:<b> {data.last_name} </b>
					</p>
					<p className="card-text">
						Email: <b>{data.email} </b>
					</p>
					<img
						src={data.avatar}
						className="card-img border border-darken-4 ml-5"
						style={{ maxWidth: 150 }}
						alt={data.first_name}
					/>
          <hr></hr>
					<button className="btn btn-primary w-100 mt-2"
                  onClick={handleClick}
          >
            Otro Usuario</button>
				</div>
			)}
		</div>
	);
};

export default App;
