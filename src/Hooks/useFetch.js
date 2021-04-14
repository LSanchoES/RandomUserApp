import { useEffect, useRef, useState } from "react";

export const useFetch =  (url) => {
	const isMounted = useRef(true);

	const [state, setState] = useState({ datos: null, loading: true, error: null });

	useEffect( () => {
		return () => {
			isMounted.current = false;
		};
	}, []);

    	useEffect(  () =>  { 
		setState({ datos: null, loading: true, error: null });
        
		fetch (url)
			.then((resp) => resp.json())
			.then((data) => {
				setState({
					loading: false,
					error: null,
					datos: data.data,
				});
				//console.log(data);
			});
	}, [url]);

	return state;
};
