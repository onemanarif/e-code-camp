import React from 'react';
import allData from '../course-data';
import { useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
const HomePage = () => {

   const data15 = allData.slice(0,15);
   const [data, setData] = useState(data15);
    const [cart, setCart] = useState([]);

   const handleAddCourse = (coursers) => {
       console.log("ok",coursers);
       const newCart = [...cart,coursers];
       setCart(newCart);
   }
   
    return (
        <div>
            <div className="cartStyle">
               <Cart cart={cart} ></Cart>
            </div>
            <div>
            {
                data.map(data => <Courses
                    handleAddCourse={handleAddCourse} 
                    coursers={data}>
                </Courses>)
            }
            </div>
                
            
        </div>
    );
};

export default HomePage;