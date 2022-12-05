
import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (input, setHasError, url) => {

	const [data, setData] = useState()

	let copyUrl = ''
	const lctionRandom = Math.floor(Math.random()* 126) + 1

	if(url) {
		copyUrl = url
	}

	if(input){
		copyUrl = `https://rickandmortyapi.com/api/location/${input}`
	}else {
		copyUrl = `https://rickandmortyapi.com/api/location/${lctionRandom}`
	}

	useEffect(() => {
		axios.get(copyUrl)
			.then((res)=>{
				setData(res.data)
				setHasError(false)
			})
			.catch((err)=>{
				console.log(err)
				setHasError(true)
			})
	}, [input])

	return data
}

export default useFetch