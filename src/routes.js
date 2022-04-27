import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./pages/admin/product/List";
import AddfromProduct from "./pages/admin/product/add";
import Dashboard from "./pages/admin/dashboard";
import EditfromProduct from "./pages/admin/product/edit";
import AdminLayout from "./layouts/adminLayout";
import WebsiteLayout from "./layouts/websiteLayout";
import Signin from "./pages/website/signin";
import Signup from "./pages/website/signup";
import Home from "./pages/website/home";
import Introduce from "./pages/website/introduce";
import Product from "./pages/website/product";
import Tintuc from "./pages/website/tintuc";
import Chitietsanpham from "./pages/website/chitietsanpham";
import Homesanphambanhtaonuong from "./pages/website/sanphambanhtaonuong";
import HomebanhTorrija from "./pages/website/HomebanhTorrija";
import Sanphambanhsocolatanchay from "./pages/website/chitietsanpham/sanphambanhsocolatanchay";
import Sanphambanhcheeseburger from "./pages/website/chitietsanpham/sanphambanhcheeseburger";
import Sanphamcomrangquantrung from "./pages/website/chitietsanpham/sanphamcomrangquantrung";
import Sppizzahaisan from "./pages/website/chitietsanpham/sppizzahaisan";
import Spsaladbomy from "./pages/website/chitietsanpham/spsaladbomy";
import Spbobittet from "./pages/website/chitietsanpham/spbobittet";
import Spaghetti from "./pages/website/chitietsanpham/spaghetti";

const Rowct = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin">
                <Dashboard />
              </Route>
              <Route exact path="/admin/product">
                <List {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddfromProduct {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditfromProduct {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <WebsiteLayout>
            <Switch>
              <Route exact path="/">
               <Home />
              </Route>
              <Route exact path="/introduce">
               <Introduce />
              </Route>
              <Route exact path="/tintuc">
               <Tintuc />
              </Route>
              <Route exact path="/product">
               <Product />
              </Route>
              <Route exact path="/chitietsanpham">
               <Chitietsanpham />
              </Route>
              <Route exact path="/homesanphambanhtaonuong">
               <Homesanphambanhtaonuong />
              </Route>
              <Route exact path="/homebanhTorrija">
               <HomebanhTorrija />
              </Route>
              <Route exact path="/Sanphambanhsocolatanchay">
               <Sanphambanhsocolatanchay />
              </Route>
              <Route exact path="/sanphambanhcheeseburger">
               <Sanphambanhcheeseburger />
              </Route>
              <Route exact path="/sanphamcomrangquantrung">
               <Sanphamcomrangquantrung />
              </Route>
              <Route exact path="/sppizzahaisan">
               <Sppizzahaisan />
              </Route>
              <Route exact path="/spsaladbomy">
               <Spsaladbomy />
              </Route>
              <Route exact path="/spbobittet">
               <Spbobittet />
              </Route>
              <Route exact path="/spaghetti">
               <Spaghetti />
              </Route>
              <Route exact path="/signup">
               <Signup />
              </Route>
              <Route exact path="/signin">
              <Signin />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Rowct;
