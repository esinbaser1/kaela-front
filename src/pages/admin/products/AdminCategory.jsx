import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../../components/Utils';
import { getProductCategories } from '../../../actions/productAction';
import AdminCategoryCard from '../../../components/admin/products/AdminCategoryCard';

const AdminCategory = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.product.categories);
  

    useEffect(() => {
        dispatch(getProductCategories());
    }, [dispatch]);


    return (
        <div>
            <h1>Categories</h1>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>page_title</th>
                            <th>page_description</th>
                            <th className="action-header" colSpan={2}> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isEmpty(categories) ? (
                                categories.map((category) => 
                                    !isEmpty(category) && (
                                    <AdminCategoryCard key={category.id} category={category}/>
                                )
                            )
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center' }}>
                                        There are no information
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <Link to="/">Add a new category</Link>
        </div>
    );
};

export default AdminCategory;
