import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Home.css'
// import SvgIcon from '@material-ui/core/SvgIcon';
class Nav extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-between py-2">
                        <div className="col-12 col-sm-4 col-md-5 d-none d-sm-block" >
                            <ul className="list-inline list-unstyled mb-0 d-flex align-items-center  d-none">
                                <img src="Assets/img/delivery-location.png" id="img_loc" style={{ display: "none" }} />
                                <li className="list-inline-item d-none d-sm-none d-md-none d-lg-inline-block location-mr" id="lstdelivryloc" style={{ visibility: "hidden" }}>

                                    <a href='#' className='lblDelivery' style={{ font: "normal" }}
                                        data-html='true' data-toggle='popover'
                                        data-placement="bottom" title="Change Location"
                                        data-container="body"> Delivering to <br />
                                        <strong className="lblDelivery"><span id="DeliveryLocation"></span></strong></a>
                                    {/* <!--btn-link--> */}
                                </li>
                                <li className="list-inline-item col-12 col-sm-12 col-md-8 p-0 ml-35">
                                    <form action="">
                                        <div className="input-group">
                                            <input type="text" id="txtSearch" className="form-control bg-gray border-green no-outile-shadow border searchText" placeholder="Search for anything"
                                                aria-label="Search for anything" aria-describedby="button-addon2" onkeypress='return callSubmit(event)' />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-success btn-sm font-weight-bold bg-gray text-green" type="button" id="button-addon2" onClick="SearchProducts($('#txtSearch').val())">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-2 col-md-2" >
                            <a href="#" id="lnk_logo" /><img className="mx-auto d-block mb-2 mb-sm-0" src="https://www.mandee.store/assets/membersarea/images/logo-main.png" alt="Mandee" height="70px" max-width="70%" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-5 quick-links" id="divManageAccount" style={{ display: "none" }}>
                            <ul id="Credits" className="list-inline list-unstyled mb-0">
                                <li className="list-inline-item credit mr-3 d-none d-sm-none d-md-none d-lg-inline-block" style={{ visibility: "visible" }}>
                                    // {/* <!--mr-3 d-none d-sm-none d-md-none d-lg-inline-block--> */}
                                    <span id="spnRemCredit" />
                                </li>
                                <li className="list-inline-item"></li>
                                {/* <!--<a href="#!"><img src="../Assets/img/chat.svg" alt="chat"></a>--> */}

                                <li className="list-inline-item"></li>
                                <a href="HTML/Wishlist.html"><img src="../Assets/img/shop-list.svg" alt="chat" /></a>

                                <li className="list-inline-item" id="lstcart" style={{ display: "block" }}>
                                    {/* <!--<a href="#!"><img src="../Assets/img/cart-empty.png" alt="chat">--> */}
                                    <a className="cart-icon" id="icon" href="HTML/Cart.html"><span id="totalItems">0</span>
                                    </a>
                                </li>
                                <li className="dropdown manage_account">
                                    <a href="HTML/AccountDetails.html" id="navbarDropdown" role="button">
                                        <strong className="lblHelloMaster"><span id="spnlogonuser"></span></strong><br />
                                        <span className="lblHelloMaster">Manage account</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-5 quick-links" id="divLoginSignup" style={{ display: "block" }}>
                            <ul className="list-inline list-unstyled mb-0" style={{ float: "right", fontWeight: "bold" }}>
                            
                                <li>
                                    <a href="https://mandeeonline.com/HTML/SignIn.html">
                                        <strong className="st">Login</strong></a>
                                    <span style={{ color: "#FAA519" }}> / </span>
                                    <a href="https://mandeeonline.com/HTML/Home.html"><strong className="st">Sign Up</strong></a>
                                </li>
                            </ul> 
                        </div>

                        {/* <!-- Main Navigation --> */}
                        <nav className="navbar navbar-expand-lg border-bottom px-0 py-0" id="main_navigation">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" onClick="$('#Toggler').click();" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars text-black"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <button className="navbar-toggler" type="button" id="Toggler" data-toggle="collapse"
                                            style={{ display: "none" }} data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01"><br />

                                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                                                <li className="nav-item dropdown" style={{ backgroundColor: "#FAA519 !important" }} id="mainli">
                                                    
                                                    <a className="nav-link" href="#" id=""
                                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                        SHOP BY CATEGORY
                                            </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="bindShopByCategories"></ul>
                                                </li>
                                            </ul>

                                        </div>
                                    </nav>

                                </ul>
                                <div id="divmainmenu" className="collapse navbar-collapse"></div>
                                <ul className="navbar-nav ml-auto cell-center">
                                    <li className="nav-item">
                                        {/* <!-- <i class="fas fa-phone-alt"></i> --> */}
                                        <i className="fas fa-phone"></i>
                                    </li>
                                    <li className="nav-item mar-right" id="lstSalesAgent" style={{ display: "none" }}>
                                        <span id="spnSalesAgntName">
                                        </span>
                                        <h6 className="text-right" id="spnSalesAgntNum"></h6>
                                    </li>
                                    <li className="nav-item">
                                        <span>
                                            call center
                                            <p>8690-222-222</p>
                                        </span>
                                        <h6><span id="spnCallCenterNum"></span></h6>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* <!-- Main Navigation --> */}
                    </div>
                </div>

            </div>
        );
    }
}

export default Nav;