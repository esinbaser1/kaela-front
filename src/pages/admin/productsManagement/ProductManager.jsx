
import { useEffect } from 'react';
import AdminNavigation from '../AdminNavigation';
import AddProduct from "./AddProduct";
import DisplayProduct from "./DisplayProduct"


const ProductManager = () => {

    useEffect(() => {
        window.scrollTo(0,0);
      }, []);

    return (
        <div className="navigation-and-content">
            <AdminNavigation/>
            <div className="content-wrapper">
                <AddProduct/>
                <DisplayProduct/>
            </div>
        </div>
    );
};

export default ProductManager;