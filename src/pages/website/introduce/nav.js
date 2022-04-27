import React from 'react'
import { Link } from 'react-router-dom'
import '../introduce/introduce.css'
const Nav = () => {
  return (
    <div>
        <div class="page">
            <section class="frag">
                <div class="grid wide">
                    <div class="row">
                        <div class="col l-12">
                            <ul class="frag__container">
                                <li class="home">
                                    <Link to='/' class="frag__link"> Trang chủ</Link>
                                    <span class="gach">/</span>
                                </li>
                                <li>
                                    <span> Giới thiệu</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="grid wide">
                <div class="row">
                    <div class="col l-12">
                        <div class="page__title">Giới thiệu</div>
                        <div class="page__content">
                            <p>
                                Đắm mình trong không gian cổ kính của Hà Nội, bạn không những được tận hưởng cảm xúc thi vị của phố cổ, mà còn được thưởng thức hương vị Pháp ngay trong lòng Thủ Đô.
                            </p>
                            <p>
                                Nằm trên con phố đông đúc và cổ kính, MocFood từ lâu đã trở thành điểm đến của những người yêu thích Bánh Ngọt Pháp. Với niềm đam mê về chất Pháp, MocFood đã mang hương vị pháp “nguyên chất” đến với những thực khách Việt Nam.
                            </p>
                            <p>
                                MocFood là một thương hiệu nổi tiếng cho những ai yêu thích văn hóa ẩm thực Pháp. Nằm trên cái “chất” của Hà Nội, chất phố cổ, chất của người tìm về cội nguồn văn hóa, du khách sẽ bắt gặp MocFood tại Số 68 Hùng Vương - Phú Thọ. Vừa tìm hiểu về văn hóa phố cổ Hà Nội, du khách có thể thưởng thức hương vị Pháp tại đây, với một không gian rất cổ kính của Hà Thành.
                            </p>
                            <p>
                                Xa hơn, du khách có thể đi xích lô, tận hưởng sự trang nhã của Hà Nội, du khách có thể bắt gặp MocFood tại 38 Phùng Hưng,  khác với nét cổ của Hà Thành, nhắm tới đối tượng trẻ hơn nhằm giúp các bạn trẻ có thể tận hưởng và khám phá hương vị của Paris cổ kính. Với không gian được bố trí trang nhã với tông màu ấm cúng, rộng rãi và thoáng mát, MocFood tại 78 Láng Hạ cũng là một sự lựa chọn cho thực khách của Hà Nội...
                            </p>

                            <p>
                                Tất cả những yếu tố đó đã tạo lên một thương hiệu MocFood.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav