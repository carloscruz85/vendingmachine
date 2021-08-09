import React, {useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    //getting data from API https://vending-machine-test.vercel.app/api/products
    useEffect(() => {
        axios.get('https://vending-machine-test.vercel.app/api/products')
        .then(res => {
            console.log(res);
        })
        .catch(error => {
          console.log('Error', error)
        })
    }, [])

    return (
        <div>
            In home
        </div>
    )
}

export default Home
