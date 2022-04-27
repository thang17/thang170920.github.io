import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom"

function AddfromProduct(props) {
  const History = useHistory();
   const { register, handleSubmit,  formState: { errors } } = useForm();
   const onSubmit = (data) =>{
    const fakeValue = {
         id: Math.random().toString(36).substring(7),
         ...data
       }
       props.onAdd(fakeValue);
       History.push("/admin/product");
   }

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
            min="2018-01-01"
            max="2018-12-31"
          {...register("date")}
          />
        </div>
      </div>

      <div>
      <label for="avatar" className="lmjjj">Choose a profile URL:</label>
      <input  type="" name="websiteUrl" className="huaua" 
          {...register("img")} />
      </div>

      <div className="">
        <label className="mb-3">Trạng thái</label>
        <select
          className="form-select"
          {...register("status")}
        >
          <option value="true">Còn hàng</option>
          <option value="false">hết hàng</option>
        </select>
      </div>
      <button class="button-17" role="button">
        Thêm sản phẩm
      </button>
    </form>
  </div>
  );
}
export default AddfromProduct;
