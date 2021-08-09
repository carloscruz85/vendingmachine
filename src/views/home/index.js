import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '../../components/modal';

const Home = () => {
    //control modal
    const [modal, setModal] = useState(
        {
            show: true,
            msg: 'Loading...'
        }
    )

    // //getting data from API https://vending-machine-test.vercel.app/api/products
    // useEffect(() => {
    //     //display modal
    //     setModal({
    //         show: true,
    //         msg: 'Loading...'
    //     })
    //     axios.get('https://vending-machine-test.vercel.app/api/products')
    //     .then(res => {
    //         console.log(res);
    //         //hide modal
    //         setModal({
    //             show: false,
    //             msg: ''
    //         })
    //     })
    //     .catch(error => {
    //       console.log('Error', error)
    //     })
    // }, [])

    return (
        <>
            { modal.show ? <Modal msg={modal.msg}/> : null }
            In home
        </>
    )
}

export default Home
