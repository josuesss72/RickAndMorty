import { useState } from "react"

export default function useSearch () {

    const [inputLocation, setInputLocation] = useState()

    const handleSumit = (e) => {
        e.preventDefault()
        setInputLocation(e.target.inputSearch.value)
    }
    return {inputLocation, handleSumit}
}