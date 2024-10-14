import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { getProductCategories } from "../../../api/categoryApi";
import { getSection } from "../../../api/sectionApi";
import { addProduct } from "../../../api/productApi";


const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSection, setProductSection] = useState("");
  const [productImage, setProductImage] = useState(null);

  const fileInputRef = useRef(null);
  const queryClient = useQueryClient();

  // Retrieving categories
  const { data: categories, isLoading: loadingCategories, error: categoriesError } = useQuery({
    queryKey: ["categories"],
    queryFn: getProductCategories,
    onSuccess: (data) => {
      if (data && data.length > 0) {
        setProductCategory(data[0].id);
      }
    }
  });

// Retrieving sections
  const { data: sections, isLoading: loadingSections, error: sectionsError } = useQuery({
    queryKey: ["sections"],
    queryFn: getSection,
    onSuccess: (data) => {
      if(data && data.length > 0) {
        setProductSection(data[0].id);
      }
    }
});


  // Mutation for adding product
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      // If successful, invalidate the 'products' query and reset the form
      if(data.sucess) {
      toast.success(data.message || "Produit ajouté avec succès !");
      setProductName("");
      setProductDescription("");
      setProductCategory(categories[0]?.id || ""); // Resets the field to the first category
      setProductSection(sections[0]?.id || "");
      setProductImage(null);
      fileInputRef.current.value = "";
      queryClient.invalidateQueries("products");
    } else {
      toast.error(data.message || "An error has occurred.");
    }
    },
    // Handle server errors
    onError: (error) => {
      toast.error("Erreur lors de l'ajout du produit : " + error.message);
    },
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productCategory", productCategory);
    formData.append("productSection", productSection);
    formData.append("productImage", productImage);

    // Trigger the mutation to add product
    mutation.mutate(formData);
  };

  if (loadingCategories || loadingSections) return "Chargement...";
  if (categoriesError || sectionsError) return `Erreur : ${categoriesError?.message || sectionsError?.message}`;

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <legend>Add a New Product</legend>

          <div className="form__group">
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              aria-required="true"
            />
          </div>

          <div className="form__group">
            <label htmlFor="productDescription">Description</label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              aria-required="true"
            ></textarea>
          </div>

          <div className="form__group">
            <label htmlFor="productCategory">Category</label>
            <select
              id="productCategory"
              name="productCategory"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              aria-required="true"
            >
              {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form__group">
            <label htmlFor="productSection">Section</label>
            <select
              id="productSection"
              name="productSection"
              value={productSection}
              onChange={(e) => setProductSection(e.target.value)}
              aria-required="true"
            >
              {sections &&
              sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form__group">
            <label htmlFor="productImage">Image</label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              ref={fileInputRef}
              onChange={(e) => setProductImage(e.target.files[0])}
              aria-required="true"
            />
          </div>

          <div className="form__button">
            <button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </fieldset>
      </form>

      <ToastContainer />
    </>
);

};

export default AddProduct;
