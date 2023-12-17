// Pages.jsx
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import User from "../user/user";
import AddUser from "../user/AddUser";
import EditUser from "../user/EditUser";
import Login from "../Login-Register/PageLogin";
import Register from "../Login-Register/PageRegister";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const AuthenticatedPages = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/i/home' component={Home} />
        <Route exact path='/i/about' component={About} />
        <Route exact path='/i/services' component={Services} />
        <Route exact path='/i/blog' component={Blog} />
        <Route exact path='/i/pricing' component={Pricing} />
        <Route exact path='/i/contact' component={Contact} />
        <Route exact path='/i/user' component={User} />
        <Route exact path='/i/AddUser' component={AddUser} />
        <Route exact path='/i/EditUser/:id' component={EditUser} />
      </Switch>
      <Footer />
    </>
  );
};




const Pages = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/Registers' component={Register} />
      <Route path='/i' component={AuthenticatedPages} />
    </Switch>
  );
};

export default Pages;



// import React from "react"
// import Header from "../common/header/Header"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Home from "../home/Home"
// import Footer from "../common/footer/Footer"
// import About from "../about/About"
// import Pricing from "../pricing/Pricing"
// import Blog from "../blog/Blog"
// import Services from "../services/Services"
// import Contact from "../contact/Contact"
// // import LoginRegister from "../loginregister/LoginRegister"
// // import Login from "../login/Login"
// import user from "../user/user"
// import AddUser from "../user/AddUser"
// import EditUser from "../user/EditUser"



// const Pages = () => {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Switch>
//         <Route exact path='/add' component={AddUser} />
//           <Route exact path='/' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/services' component={Services} />
//           <Route exact path='/blog' component={Blog} />
//           <Route exact path='/pricing' component={Pricing} />
//           <Route exact path='/contact' component={Contact} />
//           {/* <Route exact path='/loginregister' component={LoginRegister} /> */}
//           {/* <Route exact path='/login' component={Login} /> */}
//           <Route exact path='/user' component={user} />
//           <Route exact path='/AddUser' component={AddUser} />
//           <Route exact path='/EditUser/:id' component={EditUser} />
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   )
// }

// export default Pages