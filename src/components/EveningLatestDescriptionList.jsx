import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../actions/categoryAction";

const EveningLatestDescriptionList = ({ categoryIndex }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.category);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductCategories()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const category = categories && categories.length > categoryIndex
    ? categories[categoryIndex]
    : null;

  return (
    <>
      {category ? (
        <>
        <h1>{category.name}</h1>
        <div className="evening-latest__description">
          <h3>{category.page_title}</h3>
          <p>{category.page_description}</p>
          </div>
        </>
      ) : (
        <p>Category description not found.</p>
      )}
    </>
  );
};

export default EveningLatestDescriptionList;
