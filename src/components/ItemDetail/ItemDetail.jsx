import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={`../img/${producto.img}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.plan}</h5>
                    <p className='card-text'>Modelo: {producto.descripcion}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    {/*<p className='card-text'>Stock: {producto.stock}</p>*/}
                    <ItemCount stock = {producto.stock}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;