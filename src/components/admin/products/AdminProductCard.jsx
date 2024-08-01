
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../actions/productAction';
import { API_URL } from '../../../actions/serverRequest';

const AdminProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      dispatch(deleteProduct(product.id));
    }
  };

  return (
    <tr>
      <td>
        <img
          src={`${API_URL}assets/img/${product.path}`}
          alt={product.name}
          width="100"
        />
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.categorie}</td>
      <td>{product.section}</td>
      <td>
        <Link to={`/adminUpdateProduct/${product.id}`}>Modify</Link>
      </td>
      <td>
        <Link to="#" onClick={handleDeleteClick}>Delete</Link>
      </td>
    </tr>
  );
};

export default AdminProductCard;
