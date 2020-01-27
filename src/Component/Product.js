import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Home.css'
import '../Assets/Header.css'
import '../Assets/nice-select.css'
import '../Assets/Popup.css'
import '../Assets/Default.css'
import '../Assets/Main.css'

class Product extends Component {
    render() {
        return (
            <React.Fragment>
<div>
                <div id="Maincontainer">
                    <section className="bestseller">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div id="dividercontainer_101291">
                                        <div className="devider" id="devider_101291">
                                            <h2>
                                                <span>Flours</span>
                                                <div id="showMore_101291" className="showmore" onclick="toggleSKU('101291')">Show More</div>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="products-area" ></section>
                        <div className="container-fluid">
                            <div className="row" id="mandeecontainer_101291">
                                <div className="product-container" id="SKU_SFLOSBMBES000000001" style={{ display: "block" }}>
                                    <div className="single-product" id="singleproduct">
                                        <div className="btns-groupe">
                                            <div className="single-btn">
                                                <div id="btncontainer_101291_101299_SFLOSBMBES000000001">
                                                    <button type="button" className="btn btnstandard mr-11" id="btn_101291_101299_1001" onClick="getData('101291','101299','1001','{{ProductCode}}',this)">555</button></div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="product-select">
                                            <div id="ddlcontainer_101291_101299_SFLOSBMBES000000001">
                                            </div>
                                        </div>
                                        <div className="product-offer" style={{ display: "block" }}>
                                            <div className="product-thumb">
                                                <img src="https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/compressed/10118281.jpg?X-Amz-Expires=259200&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIYXXT4Y5GON4D6TQ/20191204/ap-south-1/s3/aws4_request&amp;X-Amz-Date=20191204T000040Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=0bf107cf685b4e9636de9208cbffba13dbb606ba80cbfac7575c8450203f50ce"
                                                    alt=" Besan 555 5 Kgs HDPE" id="img_101291_101299"
                                                    onClick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000001_101291_101299'" />
                                                <div className="productpremium">
                                                    <span className="Rectangle-7" id="btnselcat_101291_101299_SFLOSBMBES000000001">555</span>
                                                    <span className="Rectangle-9" id="btndisc_101291_101299_SFLOSBMBES000000001"></span>
                                                </div>
                                            </div>
                                        </div>
</div>

                                        <div className="product-title">
                                            <div className="fried">
                                                <h3 className="product" id="hdprdttl_101291_101299_SFLOSBMBES000000001">
                                                    <a onClick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000001_101291_101299'"
                                                        style={{ cursor: "pointer" }}>  Besan 555 5 Kgs HDPE</a>
                                                </h3>
                                            </div>
                                            <div className="rating-btn" style={{ display: "none" }}>
                                                <button type="button" id="btnrating" className="btn btn-outline-info btn-sm">4.4 <i className="fas fa-star"></i></button>
                                            </div>
                                        </div>

                                        <div className="product-price">
                                            <div className="product-price-info">
                                                <div style={{ float: "left", display: "none" }} id="divsellPrice">
                                                    <h4 className="Price" style={{ fontWeight: "bold !important" }}>
                                                        <label style={{ display: "block" }} className="lblcss"
                                                            id="lblCostprice_101291_101299_SFLOSBMBES000000001">₹ 0.00</label>
                                                    </h4>
                                                    <h5><label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51" }} id="lblsellprice_101291_101299_SFLOSBMBES000000001">selling price</label></h5>
                                                </div>
                                                <div id="divdelPrice" style={{ float: "left", marginLeft: "5px", display: "none" }}>
                                                    <h4 className="Price">
                                                        <span style={{ marginLeft: "0px" }} className="pricestrike"
                                                            id="spnsellingprice_101291_101299_SFLOSBMBES000000001">₹ 444.00</span>
                                                    </h4>
                                                    <h5>
                                                        <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51" }}>MRP</label>
                                                    </h5>
                                                </div>
                                                <div id="divofferPrice" style={{ float: "left", marginLeft: "10px", display: "none" }}>
                                                    <h4 className="Price">
                                                        <span style={{ marginLeft: "0px", color: "#ff746b !important" }}
                                                            id="spnsellingprice_101291_101299_SFLOSBMBES000000001" className="pricestrike"><del>₹ 444.00</del></span>
                                                    </h4>
                                                    <h5>
                                                        {/* <!--<span style={{"margin-left:0px">price</span>--> */}
                                                        <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51" }}>price</label>
                                                    </h5>
                                                </div>

                                            </div>
                                            <div className="product-price-info-btn" style={{ marginRight: "10px", display: "none" }}>
                                                <button type="button" className="btn btn-outline-danger btn-sm" onClick="fnNegotiate()">negotiate</button>
                                            </div>
                                        </div>
                                        <div className="product-delivery" style={{ display: "none" }} id="divDiscount">
                                            <div id="OfferContainer">
                                                <h2>
                                                    <span className="offer" id="spndiscnt_101291_101299_SFLOSBMBES000000001"
                                                        style={{ float: "left", marginRight: "7px", marginTop: "1px", display: "block" }}></span>
                                                    {/* <!--</span>-->
                            <!--<a href="#" data-toggle="modal" data-target="#myModal" id="anch_101291_101299_1001_SFLOSBMBES000000001" onClick="bindDiscounts('101291','101299','1001')">+ 1more</a>--> */}
                                                    <div id="discountcontainer_101291_101299_SFLOSBMBES000000001" style={{ display: "none" }}>
                                                        <a href="#" data-toggle="modal" style={{ fontSize: "14px !important", lineHeight: "1.14" }}
                                                            data-target="#discountModal" id="anch_101291_101299_1001_SFLOSBMBES000000001_10"
                                                            onClick="bindDiscounts('101291','101299','1001','SFLOSBMBES000000001','10')">+1more</a>

                                                        {/* <!--<span id="10_101299_1001_SFLOSBMBES000000001_10"></span>--></div> */}
                                                    </div>
                                                </h2>
                                            </div>
                                            <h3 style={{ color: "#4C4C4E", height: "15px", opacity: "0.8" }}>
                                                <img src="../Assets/img/delivery-truck.png" />
                                                <span style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14" }}>delivery on : </span>
                                                <span></span><span id="spndlvdt_101291_101299_SFLOSBMBES000000001"
                                                    style={{ fontWeight: " normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14", color: "#4c4c4e" }}>01/01/0001</span>
                                            </h3>
                                        </div>
                                        <div className="product-footer-btns" id="divProFooter" style={{ display: "none" }}>
                                            <div Name="btns-grue" style={{ paddingBottom: "5px" }} id="divQtycontainer_101291_101299_SFLOSBMBES000000001">
                                                <div>
                                                    
                                                    <div id="divQty_101291_101299_SFLOSBMBES000000001" style={{ display: "block", float: "left" }}>
                                                        <select id="ddlqty_101291_101299_SFLOSBMBES000000001" className="bgqty Qtytext"
                                                            onchange="fnddlQtyChange('101291','101299','1001','SFLOSBMBES000000001')">
                                                            <option value="">Qty</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="5+">5+</option>
                                                        </select>
                                                    </div>
                                                    <div id="divTxtQty_101291_101299_SFLOSBMBES000000001" style={{ display: "none", float: "left" }}>
                                                        <input type="text" id="txtQuantity_101291_101299_SFLOSBMBES000000001" className="Qtytxtbox"
                                                            onchange="fntxtQtyChange('101291','101299','SFLOSBMBES000000001')" />
                                                    </div>
                                                    <div style={{ float: "left", marginLeft: "10px" }}>
                                                        <button style={{ borderRadius: "5px", width: "55px", height: "31px" }} type="button"
                                                            className="btn btn-primary btn-sm" id="btnAdd_101291_101299_SFLOSBMBES000000001"
                                                            onClick="fnAddtoCart('101291','101299','1001','SFLOSBMBES000000001',)">add</button>
                                                    </div>
                                                </div>
                                                </div>
                                                </div>
                                            <div className="productAdd" id="divproAdd_101291_101299_SFLOSBMBES000000001" style={{ display: "none" }}>
                                                <i className="far fa-check-circle"></i>  added
                    </div>
                                            <div id="divsavelst_101291_101299_SFLOSBMBES000000001"><span style={{ marginBottom: "5px" }}>
                                                <a href="#" style={{ position: "inherit" }} onClick="fnSaveList('101291','101299','1001','SFLOSBMBES000000001')">
                                                    <i className="fas fa-list-ul"></i></a>
                                            </span>
                                            </div>
                                        </div>
                                        <div id="divValidQty_101291_101299_SFLOSBMBES000000001" className="invalid-feedback" >
                                            <span id="spnValidQty">Please Enter Some Quantity</span>
                                        </div>
                                        <div id="divproFooterlogin" style={{ display: "block", width: "100%" }}>
                                            <a href="HTML/Home.html"> <span className="index-product-login-footer">Sign Up to Buy</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-container" id="SKU_SFLOSBMBES000000002" style={{ display: "block" }}>
                                    <div className="single-product" id="singleproduct">
                                        <div className="btns-groupe">
                                            <div className="single-btn">
                                                <div id="btncontainer_101291_101299_SFLOSBMBES000000002"><button type="button"
                                                    className="btn btnstandard mr-11" id="btn_101291_101299_1001"
                                                    onclick="getData('101291','101299','1001','{{ProductCode}}',this)">555</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-select">
                                        <div id="ddlcontainer_101291_101299_SFLOSBMBES000000002"></div>
                                    </div>
                                    <div className="product-offer" style={{ display: "block" }}>
                                        <div className="product-thumb">
                                            <img src="https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/compressed/10118285.jpg?X-Amz-Expires=259200&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIYXXT4Y5GON4D6TQ/20191205/ap-south-1/s3/aws4_request&amp;X-Amz-Date=20191205T000034Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=ea213aebb38140b6099ef9e3bbb6f57ea04f102d3351b14e677c3889c2b181af"
                                                alt=" Besan 555 10 Kgs HDPE" id="img_101291_101299"
                                                onclick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000002_101291_101299'" />
                                            <div className="productpremium">
                                                <span className="Rectangle-7" id="btnselcat_101291_101299_SFLOSBMBES000000002">555</span>
                                                <span className="Rectangle-9" id="btndisc_101291_101299_SFLOSBMBES000000002"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <div className="fried">
                                            <h3 className="product" id="hdprdttl_101291_101299_SFLOSBMBES000000002">
                                                <a onclick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000002_101291_101299'"
                                                    style={{ cursor: "pointer;" }}>  Besan 555 10 Kgs HDPE</a>
                                            </h3>
                                        </div>
                                        <div className="rating-btn" style={{ display: "none" }}>
                                            <button type="button" id="btnrating" className="btn btn-outline-info btn-sm">4.4 <i className="fas fa-star"></i></button>
                                        </div>
                                    </div>

                                    <div className="product-price">
                                        <div className="product-price-info">
                                            <div style={{ float: "left", display: "none" }} id="divsellPrice">
                                                <h4 className="Price" style={{ fontWeight: "bold !important;" }}>
                                                    <label style={{ display: "block" }} className="lblcss" id="lblCostprice_101291_101299_SFLOSBMBES000000002">₹ 0.00</label>
                                                </h4>
                                                <h5><label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }} id="lblsellprice_101291_101299_SFLOSBMBES000000002">selling price</label></h5>
                                            </div>
                                            <div id="divdelPrice" style={{ float: "left", marginLeft: "5px", display: "none;" }}>
                                                <h4 className="Price">
                                                    <span style={{ marginLeft: "0px;" }} className="lblcss" id="spnsellingprice_101291_101299_SFLOSBMBES000000002">₹ 873.00</span>
                                                </h4>
                                                <h5>
                                                    <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }}>MRP</label>
                                                </h5>
                                            </div>
                                            <div id="divofferPrice" style={{ float: "left", marginLeft: "10px", display: "none;" }}>
                                                <h4 className="Price">
                                                    <span style={{ marginLeft: "0px", color: "#ff746b !important" }} id="spnsellingprice_101291_101299_SFLOSBMBES000000002"><del>₹ 873.00</del></span>
                                                </h4>
                                                <h5>

                                                    <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }}>price</label>
                                                </h5>
                                            </div>

                                        </div>
                                        <div className="product-price-info-btn" style={{ marginRight: "10px", display: "none;" }}>
                                            <button type="button" className="btn btn-outline-danger btn-sm" onclick="fnNegotiate()">negotiate</button>
                                        </div>
                                    </div>
                                    <div className="product-delivery" style={{ display: "none" }} id="divDiscount">
                                        <div id="OfferContainer">
                                            <h2>
                                                <span className="offer" id="spndiscnt_101291_101299_SFLOSBMBES000000002" style={{ float: "left", marginRight: "7px", marginTop: "1px", display: "block" }}></span>
                                                <div id="discountcontainer_101291_101299_SFLOSBMBES000000002"
                                                    style={{ display: "none;" }}><a href="#" data-toggle="modal"
                                                        style={{ fontSize: "14px !important", lineHeight: "1.14" }} dataTarget="#discountModal" id="anch_101291_101299_1001_SFLOSBMBES000000002_11" onclick="bindDiscounts('101291','101299','1001','SFLOSBMBES000000002','11')">
                                                        +1more
        </a>

                                                </div>
                                            </h2>
                                        </div>
                                        <h3 style={{ color: "#4C4C4E", height: "15px", opacity: "0.8;" }}>
                                            <img src="../Assets/img/delivery-truck.png" />
                                            <span style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14" }}>delivery on : </span>
                                            <span></span><span id="spndlvdt_101291_101299_SFLOSBMBES000000002"
                                                style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14", color: "#4c4c4e" }}>01/01/0001</span>

                                        </h3>
                                    </div>
                                    <div className="product-footer-btns" id="divProFooter" style={{ display: "none" }}>
                                        <div className="btns-grue" style={{ paddingBottom: "5px;" }} id="divQtycontainer_101291_101299_SFLOSBMBES000000002">
                                            <div>
                                                <div id="divQty_101291_101299_SFLOSBMBES000000002" style={{ display: "block", float: "left" }}>
                                                    <select id="ddlqty_101291_101299_SFLOSBMBES000000002" className="bgqty Qtytext"
                                                        onchange="fnddlQtyChange('101291','101299','1001','SFLOSBMBES000000002')">
                                                        <option value="">Qty</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="5+">5+</option>
                                                    </select>
                                                </div>
                                                <div id="divTxtQty_101291_101299_SFLOSBMBES000000002" style={{ display: "none", float: "left" }}>
                                                    <input type="text" id="txtQuantity_101291_101299_SFLOSBMBES000000002" className="Qtytxtbox"
                                                        onchange="fntxtQtyChange('101291','101299','SFLOSBMBES000000002')" />
                                                </div>
                                                <div style={{ float: "left", marginLeft: "10px" }}>
                                                    <button style={{ borderRadius: "5px", width: "55px", height: "31px" }} type="button" className="btn btn-primary btn-sm" id="btnAdd_101291_101299_SFLOSBMBES000000002" onclick="fnAddtoCart('101291','101299','1001','SFLOSBMBES000000002',)">add</button>
                                                </div>
                                            </div></div>
                                        <div className="productAdd" id="divproAdd_101291_101299_SFLOSBMBES000000002" style={{ display: "none;" }}>
                                            <i className="far fa-check-circle"></i>  added
                    </div>
                                        <div id="divsavelst_101291_101299_SFLOSBMBES000000002"><span style={{ marginBottom: "5px" }}>
                                            <a href="#" style={{ position: "inherit;" }} onclick="fnSaveList('101291','101299','1001','SFLOSBMBES000000002')">
                                                <i className="fas fa-list-ul"></i></a>
                                        </span></div>
                                    </div>
                                    <div id="divValidQty_101291_101299_SFLOSBMBES000000002" className="invalid-feedback" style={{ display: "none" }}>
                                        <span id="spnValidQty">Please Enter Some Quantity</span>
                                    </div>
                                    <div id="divproFooterlogin" style={{ display: "block", width: "100%" }}>
                                        <a href="HTML/Home.html"> <span className="index-product-login-footer">Sign Up to Buy</span></a>
                                    </div>
                                </div>
                            
                            <div className="product-container" id="SKU_SFLOSBMBES000000003" style={{ display: "block" }}>
                                <div className="single-product" id="singleproduct">
                                    <div className="btns-groupe">
                                        <div className="single-btn">
                                            <div id="btncontainer_101291_101299_SFLOSBMBES000000003">
                                                <button type="button" className="btn btnstandard mr-11" id="btn_101291_101299_1001"
                                                    onclick="getData('101291','101299','1001','{{ProductCode}}',this)">555</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-select">
                                <div id="ddlcontainer_101291_101299_SFLOSBMBES000000003"></div>
                            </div>
                            <div className="product-offer" style={{ display: "block" }}>
                                <div className="product-thumb">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/compressed/10127026.jpg?X-Amz-Expires=259200&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIYXXT4Y5GON4D6TQ/20191205/ap-south-1/s3/aws4_request&amp;X-Amz-Date=20191205T000053Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=9e0f421e298f81dfc14f478b4007eaac7e0c6e95e29dd2bf059976704ca295cf"
                                        alt=" Besan 555 25 Kgs HDPE" id="img_101291_101299" onclick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000003_101291_101299'" />
                                    <div className="productpremium">
                                        <span className="Rectangle-7" id="btnselcat_101291_101299_SFLOSBMBES000000003">555</span>
                                        <span className="Rectangle-9" id="btndisc_101291_101299_SFLOSBMBES000000003"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="product-title">
                                <div className="fried">
                                    <h3 className="product" id="hdprdttl_101291_101299_SFLOSBMBES000000003">
                                        <a onclick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000003_101291_101299'"
                                            style={{ cursor: "pointer;" }}>  Besan 555 25 Kgs HDPE</a>
                                    </h3>
                                </div>
                                <div className="rating-btn" style={{ display: "none" }}>
                                    <button type="button" id="btnrating" className="btn btn-outline-info btn-sm">4.4
                        <i className="fas fa-star"></i></button>
                                </div>
                            </div>

                            <div className="product-price">
                                <div className="product-price-info">
                                    <div style={{ float: "left", display: "none;" }} id="divsellPrice">
                                        <h4 className="Price" style={{ fontWeight: "bold !important;" }}>
                                            <label style={{ display: "block" }} className="lblcss" id="lblCostprice_101291_101299_SFLOSBMBES000000003">₹ 0.00</label>
                                        </h4>
                                        <h5><label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }} id="lblsellprice_101291_101299_SFLOSBMBES000000003">selling price</label></h5>
                                    </div>
                                    <div id="divdelPrice" style={{ float: "left", marginLeft: "5px", display: "none;" }}>
                                        <h4 className="Price">
                                            <span style={{ marginLeft: "0px;" }} className="lblcss" id="spnsellingprice_101291_101299_SFLOSBMBES000000003">₹ 2155.00</span>
                                        </h4>
                                        <h5>
                                            <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }}>MRP</label>
                                        </h5>
                                    </div>
                                    <div id="divofferPrice" style={{ float: "left", marginLeft: "10px", display: "none;" }}>
                                        <h4 className="Price">
                                            <span style={{ marginLeft: "0px", color: "#ff746b !important" }} id="spnsellingprice_101291_101299_SFLOSBMBES000000003"><del>₹ 2155.00</del></span>
                                        </h4>
                                        <h5>

                                            <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }}>price</label>
                                        </h5>
                                    </div>

                                </div>
                                <div className="product-price-info-btn" style={{ marginRight: "10px", display: "none;" }}>
                                    <button type="button" className="btn btn-outline-danger btn-sm" onclick="fnNegotiate()">negotiate</button>
                                </div>
                            </div>
                            <div className="product-delivery" style={{ display: "none" }} id="divDiscount">
                                <div id="OfferContainer">
                                    <h2>
                                        <span className="offer" id="spndiscnt_101291_101299_SFLOSBMBES000000003" style={{ float: "left", marginRight: "7px", marginTop: "1px", display: "block" }}></span>
                                        <div id="discountcontainer_101291_101299_SFLOSBMBES000000003" style={{ display: "none;" }}><a href="#" data-toggle="modal"
                                            style={{ fontSize: "14px !important", lineHeight: "1.14" }} data-target="#discountModal" id="anch_101291_101299_1001_SFLOSBMBES000000003_12" onclick="bindDiscounts('101291','101299','1001','SFLOSBMBES000000003','12')">
                                            +1more
        </a>
                                        </div>
                                    </h2>
                                </div>
                                <h3 style={{ color: "#4C4C4E", height: "15px", opacity: "0.8;" }}>
                                    <img src="../Assets/img/delivery-truck.png" /><span
                                        style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14" }}>delivery on : </span>
                                    <span></span><span id="spndlvdt_101291_101299_SFLOSBMBES000000003"
                                        style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14", color: "#4c4c4e" }}>01/01/0001</span>

                                </h3>
                            </div>
                            <div className="product-footer-btns" id="divProFooter" style={{ display: "none" }}>
                                <div className="btns-grue" style={{ paddingBottom: "5px;" }} id="divQtycontainer_101291_101299_SFLOSBMBES000000003">
                                    <div>
                                        <div id="divQty_101291_101299_SFLOSBMBES000000003" style={{ display: "block", float: "left;" }}>
                                            <select id="ddlqty_101291_101299_SFLOSBMBES000000003" className="bgqty Qtytext"
                                                onchange="fnddlQtyChange('101291','101299','1001','SFLOSBMBES000000003')">
                                                <option value="">Qty</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="5+">5+</option>
                                            </select>
                                        </div>
                                        <div id="divTxtQty_101291_101299_SFLOSBMBES000000003" style={{ display: "none", float: "left" }}>
                                            <input type="text" id="txtQuantity_101291_101299_SFLOSBMBES000000003" className="Qtytxtbox"
                                                onchange="fntxtQtyChange('101291','101299','SFLOSBMBES000000003')" />
                                        </div>
                                        <div style={{ float: "left", marginLeft: "10px" }}>
                                            <button style={{ borderRadius: "5px", width: "55px", height: "31px" }} type="button" className="btn btn-primary btn-sm" id="btnAdd_101291_101299_SFLOSBMBES000000003" onclick="fnAddtoCart('101291','101299','1001','SFLOSBMBES000000003',)">add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="productAdd" id="divproAdd_101291_101299_SFLOSBMBES000000003" style={{ display: "none;" }}>
                                    <i className="far fa-check-circle"></i>  added
                    </div>
                                <div id="divsavelst_101291_101299_SFLOSBMBES000000003"><span style={{ marginBottom: "5px" }}>
                                    <a href="#" style={{ position: "inherit;" }} onclick="fnSaveList('101291','101299','1001','SFLOSBMBES000000003')"><i className="fas fa-list-ul"></i></a>
                                </span></div>
                            </div>
                            <div id="divValidQty_101291_101299_SFLOSBMBES000000003" className="invalid-feedback" style={{ display: "none" }}>
                                <span id="spnValidQty">Please Enter Some Quantity</span>

                                <div id="divproFooterlogin" style={{ display: "block", width: "100%" }}>
                                    <a href="HTML/Home.html"> <span className="index-product-login-footer">Sign Up to Buy</span></a>
                                </div>
                            </div>

                            <div className="product-container" id="SKU_SFLOSBMBES000000004" style={{ display: "block;" }}>
                                <div className="single-product" id="singleproduct">
                                    <div className="btns-groupe">
                                        <div className="single-btn">
                                            <div id="btncontainer_101291_101299_SFLOSBMBES000000004">
                                                <button type="button" className="btn btnstandard mr-11" id="btn_101291_101299_1001"
                                                    onclick="getData('101291','101299','1001','{{ProductCode}}',this)">555</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-select">
                                <div id="ddlcontainer_101291_101299_SFLOSBMBES000000004"></div>
                            </div>
                            <div className="product-offer" style={{ display: "block" }}>
                                <div className="product-thumb">
                                    <img src="https://s3.ap-south-1.amazonaws.com/prod.mandee/admin/compressed/10118339.jpg?X-Amz-Expires=259200&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIYXXT4Y5GON4D6TQ/20191205/ap-south-1/s3/aws4_request&amp;X-Amz-Date=20191205T000034Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=74d08848051beb4e6db228c8e8a95a3db057ad48b2921015844b3fbb764c7b10"
                                        alt=" Besan 555 75 Kgs Gunny Bag" id="img_101291_101299"
                                        onclick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000004_101291_101299'" />
                                    <div className="productpremium">
                                        <span className="Rectangle-7" id="btnselcat_101291_101299_SFLOSBMBES000000004">555</span>
                                        <span className="Rectangle-9" id="btndisc_101291_101299_SFLOSBMBES000000004"></span>

                                    </div>
                                </div>
                            </div>


                            <div className="product-title">
                                <div className="fried">
                                    <h3 className="product" id="hdprdttl_101291_101299_SFLOSBMBES000000004">
                                        <a onclick="location.href = '/HTML/ProductSlider.html?SFLOSBMBES000000004_101291_101299'" style={{ cursor: "pointer;" }}>  Besan 555 75 Kgs Gunny Bag</a>
                                    </h3>
                                </div>
                                <div className="rating-btn" style={{ display: "none" }}>
                                    <button type="button" id="btnrating" className="btn btn-outline-info btn-sm">4.4 <i className="fas fa-star"></i></button>
                                </div>
                            </div>

                            <div className="product-price">
                                <div className="product-price-info">
                                    <div style={{ float: "left", display: "none;" }} id="divsellPrice">
                                        <h4 className="Price" style={{ fontWeight: "bold !important;" }}>
                                            <label style={{ display: "block" }} className="lblcss" id="lblCostprice_101291_101299_SFLOSBMBES000000004">₹ 0.00</label>
                                        </h4>
                                        <h5><label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }} id="lblsellprice_101291_101299_SFLOSBMBES000000004">selling price</label></h5>
                                    </div>
                                    <div id="divdelPrice" style={{ float: "left", marginLeft: "5px", display: "none;" }}>
                                        <h4 className="Price">
                                            <span style={{ marginLeft: "0px;" }} className="lblcss" id="spnsellingprice_101291_101299_SFLOSBMBES000000004">₹ 6480.00</span>
                                        </h4>
                                        <h5>
                                            <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }}>MRP</label>
                                        </h5>
                                    </div>
                                    <div id="divofferPrice" style={{ float: "left", marginLeft: "10px", display: "none;" }}>
                                        <h4 className="Price">
                                            <span style={{ marginLeft: "0px", color: "#ff746b !important" }} id="spnsellingprice_101291_101299_SFLOSBMBES000000004"><del>₹ 6480.00</del></span>
                                        </h4>
                                        <h5>

                                            <label className="smallPrice" style={{ marginLeft: "0px", color: "#4F4F51;" }}>price</label>
                                        </h5>
                                    </div>

                                </div>
                                <div className="product-price-info-btn" style={{ marginRight: "10px", display: "none;" }}>
                                    <button type="button" className="btn btn-outline-danger btn-sm" onclick="fnNegotiate()">negotiate</button>
                                </div>
                            </div>
                            <div className="product-delivery" style={{ display: "none" }} id="divDiscount">
                                <div id="OfferContainer">
                                    <h2>
                                        <span className="offer" id="spndiscnt_101291_101299_SFLOSBMBES000000004" style={{ float: "left", marginRight: "7px", marginTop: "1px", display: "block" }}></span>

                                        <div id="discountcontainer_101291_101299_SFLOSBMBES000000004" style={{ display: "none;" }}>
                                            <a href="#" data-toggle="modal" style={{ fontSize: "14px !important", lineHeight: "1.14" }} data-target="#discountModal" id="anch_101291_101299_1001_SFLOSBMBES000000004_13" onclick="bindDiscounts('101291','101299','1001','SFLOSBMBES000000004','13')">
                                                +1more
        </a>

                                        </div>
                                    </h2>
                                </div>
                                <h3 style={{ color: "#4C4C4E", height: "15px", opacity: "0.8;" }}>
                                    <img src="../Assets/img/delivery-truck.png" />
                                    <span style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14" }}>delivery on : </span>
                                    <span></span><span id="spndlvdt_101291_101299_SFLOSBMBES000000004"
                                        style={{ fontWeight: "normal", fontSize: "14px", paddingLeft: "3px", lineHeight: "1.14", color: "#4c4c4e" }}>01/01/0001</span>

                                </h3>
                            </div>
                            <div className="product-footer-btns" id="divProFooter" style={{ display: "none" }}>
                                <div className="btns-grue" style={{ paddingBottom: "5px;" }} id="divQtycontainer_101291_101299_SFLOSBMBES000000004">
                                    <div>
                                        <div id="divQty_101291_101299_SFLOSBMBES000000004" style={{ display: "block", float: "left;" }}>
                                            <select id="ddlqty_101291_101299_SFLOSBMBES000000004" className="bgqty Qtytext" onchange="fnddlQtyChange('101291','101299','1001','SFLOSBMBES000000004')">
                                                <option value="">Qty</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="5+">5+</option>
                                            </select>
                                        </div>
                                        <div id="divTxtQty_101291_101299_SFLOSBMBES000000004" style={{ display: "none", float: "left" }}>
                                            <input type="text" id="txtQuantity_101291_101299_SFLOSBMBES000000004" className="Qtytxtbox"
                                                onchange="fntxtQtyChange('101291','101299','SFLOSBMBES000000004')" />
                                        </div>
                                        <div style={{ float: "left", marginLeft: "10px" }}>
                                            <button style={{ borderRadius: "5px", width: "55px", height: "31px" }} type="button"
                                                className="btn btn-primary btn-sm" id="btnAdd_101291_101299_SFLOSBMBES000000004"
                                                onclick="fnAddtoCart('101291','101299','1001','SFLOSBMBES000000004',)">add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="productAdd" id="divproAdd_101291_101299_SFLOSBMBES000000004" style={{ display: "none;" }}>
                                    <i className="far fa-check-circle"></i>  added
                    </div>
                                <div id="divsavelst_101291_101299_SFLOSBMBES000000004"><span style={{ marginBottom: "5px" }}>
                                    <a href="#" style={{ position: "inherit;" }} onclick="fnSaveList('101291','101299','1001','SFLOSBMBES000000004')">
                                        <i className="fas fa-list-ul"></i></a>
                                </span>
                                </div>
                            </div>
                            <div id="divValidQty_101291_101299_SFLOSBMBES000000004" className="invalid-feedback" style={{ display: "none" }}>
                                <span id="spnValidQty">Please Enter Some Quantity</span>
                            </div>
                        
            </React.Fragment>
                    );
                }
            }
            
export default Product;