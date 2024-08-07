import { useDispatch, useSelector } from "react-redux";
import AdminProductDetailCard from "../components/admin/products/AdminProductDetailCard";
import { useEffect } from "react";
import { getProductById } from "../actions/productAction";
import { useParams } from "react-router-dom";
import Comment from "../components/comments/Comment";
import { isEmpty } from "../components/utils/isEmpty";



const ProductDetail = () => {
    const { productDetailId } = useParams();
    const dispatch = useDispatch();
    const productById = useSelector((state) => state.product.productById);

    useEffect(() => {
        if (productDetailId) {
            dispatch(getProductById(productDetailId));
        }
    }, [dispatch, productDetailId]);

    return (
        <>
            {!isEmpty(productById) ? (
                <AdminProductDetailCard key={productById.id} product={productById} />
            ) : (
                <p>Aucun produit trouvé.</p>
            )}

        <Comment/>

        </>
    );
};

export default ProductDetail;
