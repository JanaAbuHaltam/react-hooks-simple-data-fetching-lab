import React, {useEffect, useState} from 'react'

const App = () => {
    const [dogImage, setDogImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((data) => {data.json()})
        .then((json) => {
            setDogImage(json)
            setIsLoaded(true)
        })
    }, [])

    if (isLoaded) return <img src="https://images.dog.ceo/breeds/bulldog-english/mami.jpg" alt="A Random Dog"/>
    
    else return <p>Loading...</p>
}

export default App