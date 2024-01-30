import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/productReducer';

function ListProduct(props) {
    const products = useSelector(state=>state.productR.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])
    return (
        <div class="row">
        <h2>Danh sach san pham</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item,index)=>{
                return (
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                  </tr>
                );
            })}
           
          </tbody>
        </table>
      </div>
    );
}

export default ListProduct;