import { noAuthInstance } from "../../utils/axios"; 

const ProductsServices = {
  getProducts: async (category, filterOptions = {}) => {
    console.log("filterOptions-------", filterOptions);
    const params = {
      sub_category: filterOptions.sub_category?.length
        ? filterOptions.sub_category.join(",")
        : "",
      min_price: filterOptions.min_price || "",
      max_price: filterOptions.max_price || "",
      color: filterOptions.color || "",
      size: filterOptions.size || "",
      is_active: filterOptions.is_active || "",
    };
    const response = await noAuthInstance.get(
      `shop-admin/list-create/${category}`,
      {
        params: params,
      }
    );
    return response.data;
  },
  getSubcategories: async () => {
    const response = await noAuthInstance.get("store/list-sub-categories");
    return response.data;
  },
  getProduct: async (id) => {
    const response = await noAuthInstance.get(
      `shop-admin/product-get-update/${id}`
    );
    return response.data;
  },
};

export default ProductsServices;
