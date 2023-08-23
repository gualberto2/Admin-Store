import getProducts from "@/actions/get-products";

interface ProductPageProps {
  params: {
    prodcutId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = {};
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return <div>hello</div>;
};

export default ProductPage;
