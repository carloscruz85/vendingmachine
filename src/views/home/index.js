import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '../../components/modal';
import './index.scss';
import Glass from '../../assets/img/glass.png'

const Home = () => {
    //control z-index of finish products
    const [zIndex, setZindex] = useState( 0 )

    //control modal
    const [modal, setModal] = useState(
        {
            show: false,
            msg: 'Loading...'
        }
    )

    //wait data
    const preData = {
        "id": "-1",
        "name": "Loading",
        "preparation_time": 5,
        "thumbnail": Glass,
        "order": 1234567
    }

    //control data
    const [data, setData] = useState(
        [
            preData
        ]
    )

    //ask to user
    const [ask, setAsk] = useState( preData )

    //dispatch queue
    const [queue, setQueue] = useState( [preData] )

    //getting data from API https://vending-machine-test.vercel.app/api/products
    useEffect(() => {
        let time = new Date(); 
        setCount(time.getTime());
        //display modal
        setModal({
            show: true,
            msg: 'Loading...'
        })
        axios.get('https://vending-machine-test.vercel.app/api/products')
        .then(res => {
            // console.log(res);
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


    //set Timer
    let [count, setCount] = useState(0);

    useEffect(() => {
        let id = setInterval(() => {
          setCount(count + 1);
        }, 1000);
        return () => clearInterval(id);
      });

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
                                return(
                                    <div className="product" key={product.id} onClick={ ()=>{ setAsk(product) } }>
                                        <div className="img-container">
                                            <img src={product.thumbnail} alt="img" />                        
                                        </div>
                                    </div>
                                )
                            } ) }
                        </div>
                        <div className="screen">
                            <div className="ask">
                                <div className="panel">
                                    <div className="img">
                                        <img src={ask.thumbnail} alt="img" />
                                    </div>
                                    <div className="data">
                                        <small><b>{ask.name}</b> <i>Preparation: {ask.preparation_time} segs</i></small>
                                    </div>
                                    <div className="add" onClick={ ()=>{ 
                                        let newProduct = {...ask} // clone object
                                        let order = new Date();
                                        newProduct.order = order.getTime();
                                        setQueue( [...queue, newProduct] ) } }>
                                        Agregar
                                    </div>
                                </div>
                            </div>
                            <div className="waiter">
                                {
                                    queue.map( (q,i) => {
                                        let timeNow = new Date();
                                        let remain = q.preparation_time - Math.floor((timeNow.getTime() - q.order) / 1000)
                                        if( remain <= 0 ){
                                            return null
                                        }else
                                        q.left = Math.random() * (80 - 0) + 0
                                        q.z = 9900 + count
                                        let name = q.name.split(' ')
                                        return(
                                            <div className="queue" key={i}>
                                                {name[0]} {name[1]}: {remain} left
                                            </div>
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="ready">
                    {
                                    queue.map( (q,i) => {
                                        let timeNow = new Date();
                                        let remain = q.preparation_time - Math.floor((timeNow.getTime() - q.order) / 1000)
                                       
                                        if( remain <= 0 ){
                                            return (
                                                <div className="finish" key={i} style={{left: `${q.left}%`, zIndex : q.z}}>
                                                   <img src={q.thumbnail} alt="product" />
                                                </div>
                                            )
                                        }else
                                        return(
                                            null
                                        )
                                    } )
                                }    
                    </div>            
                </div>
            </div>
        </>
    )
}

export default Home
