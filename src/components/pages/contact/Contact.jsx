import "./Contact.css";
import { contactPageData } from "../../../Data/Data";
import Navbar from "../../Navbar/Navbar";
import profile from "../../../assets/images/profile.png"
import convocation from "../../../assets/images/convocation.jpg"


import SocialMedia from "../../socialMedia/SocialMedia";
import Footer from "../../footer/Footer";
import { Fade } from "react-awesome-reveal";



const ContactData = contactPageData.contactSection;

export default function Contact(props) {
    const theme = props.theme;
    return (
        <div className="contact-main">
            <Navbar theme={theme} setTheme={props.setTheme} />
            <div className="basic-contact">
                <Fade >
                    <div className="contact-heading-div">
                        <div className="contact-heading-img-div">
                            <img
                                className="profile-pic"
                                src={convocation}
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
                </Fade>
            </div>
            <Footer theme={props.theme} />
        </div>
    );
}
