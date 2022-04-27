import { useEffect, useState } from "react";
import "./App.css";
import { getAll, remove, add, edit } from "./api/axiosProduct";
import Rowct from "./routes";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  // xóa sản phẩm
  const onHandeadd = async (id) => {
    try {
      await remove(id);
      const newProduct = products.filter((item) => item.id != id);
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  // thêm sản phẩm
  const onAddHandle = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onEditHandle = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product) =>
        product.id == item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {}
  };
  return (
    <Rowct
      products={products}
      onDelete={onHandeadd}
      onAdd={onAddHandle}
      onEdit={onEditHandle}
    />
  );
}

export default App;
