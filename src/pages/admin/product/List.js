import { Link } from "react-router-dom";

function List(props) {
  return (
    <div className="hahary">
     <h1>Quản lý sản phẩm</h1>
     <Link class="button-1" role="button" to="/admin/product/add">Thêm sản phẩm</Link>
      <table className="content-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Tên sản phẩm</th>
            <th>Ngày tháng</th>
            <th>Giá sản phẩm </th>
            <th>Hình ảnh</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
        {props.products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.date}</td>
                  <td>{product.price}$</td>
                  <td><img src={product.img} width="120" height="80"/></td>
                  <td>
                    {product.status == "true" ? (
                      <span className="text-success">Còn hàng</span>
                    ) : (
                      <span className="text-danger">Hết hàng</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => props.onDelete(product.id)}
                      className="button-8"
                    >
                      Delete
                    </button>
                    <Link className="button-9" to={`/admin/product/${product.id}/edit`}>Edit</Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
