import { IconAddressBook, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconMail, IconPhone } from "@tabler/icons-react"
import logo from "../images/logo_all_happy_events.png";

const Footer = () => {

    return (
        <footer >
            <div className="rr-footer-2-main p-relative fix px-4">
                <div className="rr-footer-2-area pt-85 py-3 p-relative fix">
                    <div className="container-fluid">
                        <div className="rr-footer-2-border">
                            <div className="row gx-30">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mb-50 wow rrfadeUp" data-wow-duration=".9s"
                                    data-wow-delay=".3s">
                                    <div className="rr-footer-2-widget footer-cols-1">
                                        <div className="rr-footer-2-logo pb-20">
                                            <a href="#">
                                               <img src={logo} className="Footer_logo" alt="logo" /></a>
                                        </div>
                                        <div className="rr-footer-2-widget-content mb-25">
                                            <p>Your trusted partner for matrimony services and event planning, offering
                                                seamless coordination, personalized support, and memorable experiences for
                                                every celebration.</p>
                                        </div>
                                        <div className="rr-footer-2-social d-flex align-items-center">
                                            <span>Follow Us :</span>
                                            <a href="#"><IconBrandFacebook/></a>
                                            <a href="#"><IconBrandLinkedin/></a>
                                            <a href="#"><IconBrandTwitter/></a>
                                            <a href="#"><IconBrandInstagram/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-50 wow rrfadeUp" data-wow-duration=".9s"
                                    data-wow-delay=".5s">
                                    <div className="rr-footer-2-widget footer-cols-2">
                                        <h4 className="rr-footer-2-title">Information</h4>
                                        <div className="rr-footer-2-list ">
                                            <ul className="p-0">
                                                <li><a href="Venues_list.html">Venues</a></li>
                                                <li><a href="Vendors_list.html">Vendors</a></li>
                                                <li><a href="photos.html">Photos</a></li>
                                                <li><a href="real_wedding.html">Real Weddings</a></li>
                                                <li><a href="blogs_list.html">Blog</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-50 wow rrfadeUp" data-wow-duration=".9s"
                                    data-wow-delay=".3s">
                                    <div className="rr-footer-2-widget footer-cols-1">
                                        <h4 className="rr-footer-2-title">Contact</h4>
                                        <div className="rr-footer-2-widget-content mb-25">
                                            <p>Would you have any enquiries.Please feel free to contuct us</p>
                                            <div className="rr-footer-2-widget-content-item">
                                                <IconMail/>
                                                <a href="#">allhappyevents@gmail.com</a>
                                            </div>
                                            <div className="rr-footer-2-widget-content-item">
                                               <IconPhone />
                                                <a href="#">+91 987 654 3210</a>
                                            </div>
                                            <div className="rr-footer-2-widget-content-item">
                                               <IconAddressBook/>
                                                <a href="#"> Hyderabad - India</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rr-copyright-2-area p-relative">
                <div className="container rr-copyright-2-broder rr-copyright-2-space">
                    <div className="row align-items-center text-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 wow rrfadeUp" data-wow-duration=".9s"
                            data-wow-delay=".3s">
                            <div className="rr-copyright-2-left-main">
                                <p>© 2025 <a href="#">All Happy Events</a> All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer