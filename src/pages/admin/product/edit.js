import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/axiosProduct";

function EditfromProduct(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const History = useHistory();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
      } catch (error) {}
    };
    getProducts();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data,
    };
    props.onEdit(fakeValue);
    History.push("/admin/product");
  };

  return (
    <div className="gidudi">
      <div>
        <h2>Cập nhật sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <input
            type="text"
            id="name"
            class="form-webkit"
            placeholder=" "
            defaultValue={product.name}
            {...register("name")}
          />
          <label class="form-control-placeholder" for="name">
            Tên sản phẩm
          </label>
        </div>
        <div className="ruiii">
        <div class="form-group">
          <input
            type="text"
            id="name"
            class="form-webkit"
            onkeyup="validatename()"
            placeholder=" "
            defaultValue={product.price}
            {...register("price")}
          />
          <label class="form-control-placeholder" for="name">
            Giá sản phẩm
          </label>
        </div>
        </div>

        <div>
          <div>
            <label htmlFor="start" className="date">Start date:</label>
            <input
            className="form-date"
              type="date"
              id="start"
              name="trip-start"
          
              defaultValue={product.date}
            {...register("date")}
            />
          </div>
        </div>

        <div>
        <label for="avatar" className="lmjjj">Choose a profile URL:</label>
        <input  type="" name="websiteUrl" className="huaua" defaultValue={product.img}
            {...register("img")} />
        </div>

        <div className="">
          <label className="mb-3">Trạng thái</label>
          <select
            className="form-select"
            defaultValue={product.status}
            {...register("status")}
          >
            <option value="true">Còn hàng</option>
            <option value="false">hết hàng</option>
          </select>
        </div>
        <button class="button-17" role="button">
          Thêm sản phẩm{" "}
        </button>
      </form>
    </div>
  );
}
export default EditfromProduct;
