import React from "react";
// import { Fade } from "react-reveal";
import "./Contact.css";
import { contactPageData } from "../../../Data/Data";
import Navbar from "../../Navbar/Navbar";
import profileImage from "../../../assets/images/profileImage.png"
import SocialMedia from "../../socialMedia/SocialMedia";
import Footer from "../../footer/Footer";



const ContactData = contactPageData.contactSection;

export default function Contact(props) {
    const theme = props.theme;
    return (
        <div className="contact-main">
            <Navbar theme={theme} setTheme={props.setTheme} />
            <div className="basic-contact">
                {/* <Fade bottom duration={1000} distance="40px"> */}
                <div className="contact-heading-div">
                    <div className="contact-heading-img-div">
                        <img
                            className="profile-pic"
                            src={profileImage}
                            alt=""
                        />
                    </div>
                    <div className="contact-heading-text-div">
                        <h1
                            className="contact-heading-text"
                            style={{ color: theme.text }}
                        >
                            {ContactData["title"]}
                        </h1>
                        <p
                            className="contact-header-detail-text subTitle"
                            style={{ color: theme.secondaryText }}
                        >
                            {ContactData["description"]}
                        </p>
                        <SocialMedia page="contact" />
                    </div>
                </div>
                {/* </Fade> */}
            </div>
            <Footer theme={props.theme} />
        </div>
    );
}
