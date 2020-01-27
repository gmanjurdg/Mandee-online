import React, { Component } from 'react';
import Product from './Product';


class Main extends Component {
    render() {
        return (
            <div>
                <div className="loader" style={{display: "none"}}></div>
                <div id="headercontainer">
                <section className="movecontent">
                    <div className="headerNav">
                        <div id="quickLink">
                            <a href="https://mandeeonline.com/HTML/PlaceAnOrder.html" id="PlaceanOrder">
                                <img src="https://icon-library.net/images/order-icon-png/order-icon-png-26.jpg" className="mb-2" alt="chat" />
                                <p className="font-weight-bolder">Place an Order </p>
                            </a>
                            <a href="#!" id="CompareGrades" style={{ display: "none" }}>                     {/* <!--<img src="../Assets/img/custom-2.svg" class="mb-2" alt="chat">--> */}
                                <p className="font-weight-bolder">Compare Grades</p>
                            </a>
                            <a href="https://mandeeonline.com/HTML/NegotiateInfo.html">
                                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/negotiate-879264.png" className="mb-2" alt="chat" />
                                <p className="font-weight-bolder">Negotiate </p>
                            </a>
                            <a href="#!" id="TrackOrder" style={{ display: "none" }}>
                                {/* <!--<img src="../Assets/img/custom-4.svg" class="mb-2" alt="chat">--> */}
                                <p className="font-weight-bolder">Track Order</p>
                            </a>
                            <a href="https://mandeeonline.com/HTML/ReturnInfo.html" id="cancelorder">
                                <img src="data:image/png;base64,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" className="mb-2" alt="chat" />
                                <p className="font-weight-bolder">Return/Cancel Order</p>
                            </a>
                            <a href="#!" id="help" style={{ display: "none" }}>
                                {/* <!--<img src="../Assets/img/custom-6.svg" class="mb-2" alt="chat">--> */}
                                <p className="font-weight-bolder">Help/Know More</p>
                            </a>
                        </div>
                    </div>
                    <div className="banner-2">
                    <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/VijaySethupathi_Mandee_Facebook.jpg?itok=AAdfGUYP" alt="baner" 
                    height="500px;" />
                    <div className="banner-btn" id="divbanerbtn" style={{padding:"10px"}}>
                                    <a href="https://mandeeonline.com/HTML/Home.html">
                                        <span className="Rectangle-8-Copy banner-area2-span-ct" id="btnsignup">sign up</span></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.mandeeonline.b2b" style={{ paddingleft: "25px" }} id="hrfApkLogin" target="_blank">
                                        <span className="Rectangle-8-Copy banner-area2-span-ct" id="btnappdownload" style={{backgroundColor: "green", font:"bold", marginLeft: "45px"}}>Download the App</span></a>
                                </div>
                </div>
                    <div className="col-sm-12 col-sm-12" style={{ display: "block" }} id="divbanner1">
                        <section className="banner-area2">
                            <div className="banner h-100 d-flex align-items-center">
                                <div style={{ margin: "0 auto", display: "none" }}>
                                    <div style={{ display: "none" }}>
                                        <h2 className="Quality-Goods">quality goods</h2>
                                        <br />
                                        <h3 className="At-the-Best-Prices">At the Best Prices</h3>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-sm-12 col-sm-12" style={{ display: "none" }} id="divbanner2">
                        <section className="banner-area2">
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-12 h-100">
                                        <div className="banner h-100 d-flex align-items-center">
                                            <div className="bannerapp-btn" id="divbanerappbtn">
                                                <a href="" id="hrfApkAfterLogin" target="_blank">
                                                    <span className="Rectangle-8-Copy banner-area2-span download-app" id="btnappdwnld">Download the App</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                   {<Product />} 
                    <div id="Maincontainer">
                    </div>
                    <div id="Vegcontainer">
                    </div>
                    <div id="Footer">
                    </div>
                    <div className="col-sm-12 col-sm-12" style={{position: "inherit !important"}}>
                        <footer className="footer-bg">
                            <div className="container ">
                                <div className="row align-items-center ">
                                    <div className="col-md-4 col-sm-6" style={{ marginTop: "20px" }}>
                                        <div className="footer-logo ">
                                                <img src="https://www.mandee.store/assets/membersarea/images/logo-main.png " alt="heklo " height="auto"
                                                style={{maxWidth: "90%",marginLeft: "-255px",marginBottom: "20px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 ">
                                        <div className="footer-menu d-flex footerclass">
                                            <ul>
                                                <li><a href="https://mandeeonline.com/HTML/AboutUS.html">About Us</a>  </li>
                                                <li><a href="https://mandeeonline.com/HTML/PrivacyPolicy.html">Privacy policy</a></li>
                                                <li><a href="https://mandeeonline.com/HTML/TermsAndUse.html">Terms of use</a></li>
                                            </ul>
                                            <ul className="ml-50 ">
                                                <li><a href="https://mandeeonline.com/HTML/FAQ.html">FAQs</a></li>
                                                <li><a href="https://mandeeonline.com/HTML/WorkWithUS.html">Work with us</a></li>
                                                <li><a href="https://mandeeonline.com/HTML/ContactUS.html">Contact Us</a> </li>
                                                {/* <li><a href="https://mandeeonline.com/HTML/WorkWithUS.html">Work with us</a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 mt-sm-30 ">
                                        <div className="footer-menu-2 footerclass">
                                            <ul style={{color:"white",fontSize:"11px"}}>
                                                <h3 id="hrfHOF">Mandee HO</h3>
                                                <li>SAI NAMAN, H No - C-2, 1-B Main Road, Block-7, HSR Layout, Sector-6,</li>
                                                <li>Bangalore</li>
                                                <li>Karnataka</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ minheight: "100%", display: "none" }}>
                                <div className="col-12 col-md-5 col-sm-2" style={{ overflow: "auto", paddingbottom: "150px" }}>
                                    <section className="chact-area border-bottom" style={{ position: "fixed", float: "left", bottom: "-65px", textalign: "center", backgroundcolor: "white", width: "100%", paddingtop: "5px !important" }}>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="chat" style={{ float: "right" }}>
                                                        <h4 style={{ color: "green !important" }}>online chat</h4>
                                                        <span style={{ marginbottom: "13px" }}>
                                                            <img style={{ paddingbottom: "5px !important" }} src="../Assets/img/chat-white.png" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </footer>
                    </div>
                </section>
                <div id="popover-content" className="hide" style={{ display: "none" }}>
                    <form className="form-inline" style={{ width: "100%", textalign: "inherit !important" }} role="form">
                        <div className="form-group" id="divpopover">
                            <input type="text" className="form-control" id="pincode" maxlength="6" onkeypress='return isNumberKey(event)' placeholder="Enter your pincode" name="pincode"
                                style={{ width: "137px", paddingleft: "5px required" }} />
                            <button className="btn btn-success btn-circle btn-circle-sm m-1" onClick="fnLocationChange()">GO</button>
                            {/* <!--<div class="invalid-feedback">
                    Enter ZipCode.
                </div>--> */}
                        </div>
                    </form>
                    <span className="error"> </span>
                    <hr className="popover-hr" />
                    <div style={{ textalign: "center" }}>
                        <a id="AllLocations" style={{ color: "blue", fontsize: "12px", textdecoration: "underline", cursor: "pointer" }}
                            onClick="FnLocations()">View All Locations</a>
                    </div>


                </div>



                <button type="button" id="GetLocations" className="btn btn-primary" data-toggle="modal" data-target="#Locations"
                    style={{ display: "none" }}>
                    Locations
    </button>
                <div className="modal fade" id="Locations" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">All Locations</h4>
                                <button type="button" id="close" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body" style={{ alignitems: "center", maxheight: "calc(100vh - 220px)", overflowY: "auto" }}>
                                <div id="AddressLocations"></div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="discountModal" role="dialog" style={{ paddingright: "0px !important" }}>
                    <div className="modal-dialog" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>

                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Choose Promotions</h4>
                                <button type="button" style={{ color: "white", opacity: "1", paddingtop: "8px" }}
                                    className="close modal-close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body" id="divpopup">
                            </div>
                            {/* <!--<div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>--> */}
                        </div>

                    </div>
                </div>

                <button type="button" id="Wishist" className="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModalCenter" style={{ display: "none" }}>
                    wishList
    </button>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="savedlisttitle">Saved Lists</h5>
                                <a href="#" style={{ textdecorationcolor: "ActiveBorder" }}>
                                    <span aria-hidden="true" id="createnew" onClick="CreateSavedList()">+Create New</span>
                                </a>
                            </div>
                            <div className="modal-body" id="SavedlistItems" style={{ maxheight: "calc(100vh - 220px)", overflow: "auto" }}>
                                <p style={{ fontsize: "18px" }}>Select One From The Existing Lists</p>
                                <ul id="listItems"></ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" id="savedlistclose">Close</button>
                                <button type="button" className="btn btn-primary" id="CreateWishList" data-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" id="savedlist" className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{ display: "none" }}>
                    Launch demo modal
    </button>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Create New Saved list</h4>
                                <button type="button" id="close" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body" style={{ alignitems: "center" }}>
                                <form className="form-savedList" style={{ width: "100%", textalign: "inherit!important" }} role="form">
                                    <div style={{ marginleft: "19px" }}><label>Saved List</label></div>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control" id="listName" placeholder="Saved List name" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid Saved List name.
                            </div>
                                    </div>
                                </form>
                                <div style={{ padding: "15px" }}>
                                    <button type="button" id="Productcode" style={{ color: "White", marginleft: "42%" }}
                                        className="btn btn-primary btn-sm">
                                        save
                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;