// import React, { Component } from 'react';

// class SignIn extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <div>
//                     <noscript>
//                         <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZT5T8L"
//                             height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe>
//                     </noscript>
//                     <div className="loader"></div>
//                     </div>
//                     {/* <!--[if lte IE 9]> */}
//             <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
//                     {/* <![endif]--> */}
//     {/* <!--header-start--> */}
//     <div id="headercontainer"></div>
//                     <main classNamen="movecontent">
//                         <div className="col-lg-12 col-sm-12 col-sm-12">
//                             <section className="category-area">
//                                 <div className="container">

//                                     <div className="row">


//                                         <div className="col-md-8 offset-md-2 col-lg-5 offset-lg-4 col-xs-12 text-center" style="margin-top:70px;width: 480px;height: 440px;border-radius: 10px;background-color: #ffffff;">
//                                             <div className="signup-tile">
//                                                 <h4 className="Welcome-Back">Welcome Back</h4>
//                                             </div>
//                                             <form style="text-align:inherit">
//                                                 <div className="form-row">
//                                                     <div className="form-group col-md-6" id="divMobile">
//                                                         <label for="inputMobileNo" className="Email-ID">Mobile*</label>
//                                                         <input type="tel" style="text-transform:none !important" className="form-control logoninput" id="inputMobileNo" placeholder="98xxxxxxxx" maxlength="10" onkeypress='return isNumberKey(event)' required>
//                                                             <div className="invalid-feedback" style="width:auto;white-space:nowrap;" id="divmobileno">
//                                                                 <span id="spnMobileNo"></span>
//                                                             </div>
//                                     </div>
//                                                     </div>

//                                                     <div className="form-row">
//                                                         <div className="form-group col-md-6 pl-10" id="divPwd">
//                                                             <label for="inputPassword4">Password*</label>
//                                                             <input type="password" style="text-transform:none !important" className="form-control logoninput" id="inputPassword4" placeholder="********">
//                                                                 <div className="invalid-feedback" style="width:auto;white-space:nowrap;" id="divpwd">
//                                                                     <span id="spnPassword"></span>
//                                                                 </div>
//                                     </div>
//                                                         </div>
//                                                         <div className="form-row">
//                                                             <div className="form-group col-md-6 pl-10" style="margin-top: 10px;text-align:inherit;">
//                                                                 <a id="forgotpwd" style="color:blue;font-size:14px;text-decoration:underline;cursor:pointer" data-toggle="modal" data-target="#modalForgotPwd">Forgot Your Password?</a>
//                                                             </div>
//                                                         </div>

//                                                         <div className="signup-btn">
//                                                             <!--style="height: 48px;background-color: #729133;border-radius: 0px !important;margin-top: 30px;"-->
                        
//                                     <button id="btnSign" type="button" className="btn btn-text" style="margin-top: 30px;" onclick="AuthenticateUser()">
//                                                                 SIGN IN
//                                     </button>
//                                                         </div>
//                             </form>
//                                                 </div>
//                     </div>
//                                         </div>
//             </section>
//                                 </div>
//     </main>
//                             <div className="modal fade" id="modalForgotPwd" role="dialog" style="padding-right: 0px !important;" data-backdrop="static" data-keyboard="false">
//                                 <div className="modal-dialog modal-dialog-centered modal-sm" style="margin: auto; display: flex; justify-content: center;">

//                                     <!-- Modal content-->
//             <div className="modal-content" style="text-align:center">
//                                         <div className="modal-header" style="border-bottom:0px !important;margin:auto">
//                                             <h4 className="modal-title text-center" style="font-size: 20px;">Forgot Password</h4>
//                                             <button type="button" style="color: white; opacity: 1; padding-top: 8px;" className="close modal-close" data-dismiss="modal">&times;</button>
//                                         </div>
//                                         <div className="modal-body" id="divpopup">
//                                             <div className="panel-body">
//                                                 <fieldset>
//                                                     <div className="form-group">
//                                                         <input className="form-control input-lg" placeholder="Enter Registered Mobile Number" id="txtmobl" type="tel" maxlength="10" onkeypress='return isNumberKey(event)' required>
//                                                             <div className="invalid-feedback" id="divRegmobile">
//                                                                 <span id="spnRegmobile"></span>
//                                                             </div>
//                             </div>
//                         </fieldset>
//                     </div>
//                                             </div>
//                                             <div className="modal-footer pwdfooter">
//                                                 <button type="button" className="btn btn-default passwordbtn" id="btndismiss" data-dismiss="modal" onclick="ClearFields()">Cancel</button>
//                                                 <button type="button" className="btn btn-primary passwordbtn" id="btnSend" onclick="SendOtptoMobile()">Send OTP</button>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>

//                                 <div className="modal fade" id="modalUpdtPwd" role="dialog" style="padding-right: 0px !important;" data-backdrop="static" data-keyboard="false">
//                                     <div className="modal-dialog modal-dialog-centered" style="margin: auto; display: flex; justify-content: center;">

//                                         <!-- Modal content-->
//             <div className="modal-content" style="text-align:center">
//                                             <div className="modal-header" style="border-bottom:0px !important;margin:auto">
//                                                 <h4 className="modal-title text-center" style="font-size: 20px;">Forgot Password</h4>
//                                                 <button type="button" style="color: white; opacity: 1; padding-top: 8px;" className="close modal-close" data-dismiss="modal">&times;</button>
//                                             </div>
//                                             <div className="modal-body" id="divpopup">
//                                                 <div className="control-group" style="margin-bottom:15px !important">
//                                                     <label for="current_password" className="control-label">OTP</label>
//                                                     <input type="password" id="userOtp" className="form-control passwordinput text-center validate col-lg-6 col-md-6 col-sm-6" placeholder="****" maxlength="4">
//                                                         <input type="password" className="otphdtxt" id="appOtp" maxlength="4" hidden />
//                                                         <div className="invalid-feedback" id="divotp" style="display:none">
//                                                             <span id="spnOTP"></span>
//                                                         </div>
//                     </div>
//                                                     <div className="control-group" style="margin-bottom:15px !important">
//                                                         <label for="current_password" className="control-label">New Password</label>
//                                                         <input type="password" id="newpwd" className="form-control passwordinput text-center validate col-lg-6 col-md-6 col-sm-6" placeholder="********">
//                                                             <div className="invalid-feedback" id="divnewpwd" style="display:none">
//                                                                 Please Enter New Password.
//                         </div>
//                     </div>
//                                                         <div className="control-group" style="margin-bottom:15px !important">
//                                                             <label for="current_password" className="control-label">Confirm New Password</label>
//                                                             <input type="password" id="confpwd" className="form-control passwordinput text-center validate col-lg-6 col-md-6 col-sm-6" placeholder="********">
//                                                                 <div className="invalid-feedback" id="divconfpwd" style="display:none">
//                                                                     <span id="spnconfpwd"></span>
//                                                                 </div>
//                     </div>
//                                                         </div>
//                                                         <div className="modal-footer pwdfooter">
//                                                             <button type="button" className="btn btn-default passwordbtn" id="btnCancel" data-dismiss="modal" onclick="ClearPwdFields()">Cancel</button>
//                                                             <button type="button" className="btn btn-primary passwordbtn" id="btnUpdatePwd" onclick="UpdatePassword()">Update Password</button>
//                                                         </div>
//                                                     </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//             </React.Fragment>
//                                     );
//                                 }
//                             }
                            
// export default SignIn;  