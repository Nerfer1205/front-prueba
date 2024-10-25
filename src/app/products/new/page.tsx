import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.api";


async function ProductsNewPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  let product = null;
  if (id) {
    product = await getProduct(id);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {id ? "Edit Product" : "Create Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
export default ProductsNewPage;