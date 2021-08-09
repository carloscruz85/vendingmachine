import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '../../components/modal';
import './index.scss';
import Glass from '../../assets/img/glass.png'

const Home = () => {
    //control modal
    const [modal, setModal] = useState(
        {
            show: false,
            msg: 'Loading...'
        }
    )

    //control data
    const [data, setData] = useState(
        [
            {
                "id": "-1",
                "name": "Loading",
                "preparation_time": 1,
                "thumbnail": Glass
            }
        ]
    )

    //getting data from API https://vending-machine-test.vercel.app/api/products
    useEffect(() => {
        //display modal
        setModal({
            show: true,
            msg: 'Loading...'
        })
        axios.get('https://vending-machine-test.vercel.app/api/products')
        .then(res => {
            console.log(res);
            setData(res.data.data)
            //hide modal
            setModal({
                show: false,
                msg: ''
            })
        })
        .catch(error => {
          console.log('Error', error)
          setModal({
            show: true,
            msg: 'Error '+error+' Contact carloscruz85@gmail.com '
        })
        })
    }, [])

    return (
        <>
            { modal.show ? <Modal msg={modal.msg}/> : null }
            <div className="machine-container">
                <div className="machine">
                    <div className="title">
                        Machine
                    </div>
                    <div className="body">
                        <div className="products">
                            { data.map( (product,i) => {
                                // console.log(product);
                                return(
                                    <div className="product" key={i}>
                                        <div className="img-container">
                                            <img src={product.thumbnail} alt="img" />                        
                                        </div>
                                    </div>
                                )
                            } ) }
                        </div>
                        <div className="screen">
                            <div className="waiter">
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
