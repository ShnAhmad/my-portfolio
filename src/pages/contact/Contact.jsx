import "./Contact.css";
import profile from "../../assets/images/profile.png"

import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-awesome-reveal";
import { contactPageData } from "../../Data/Data";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";



const ContactData = contactPageData.contactSection;

export default function Contact(props) {
    const theme = props.theme;
    return (
        <div className="contact-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="basic-contact">
                <Fade >
                    <div className="contact-heading-div">
                        <div className="contact-heading-img-div">
                            <img
                                className="profile-pic"
                                src={ContactData["profileImage"]}
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
                            <SocialMedia />
                        </div>
                    </div>
                </Fade>
            </div>
            <Footer theme={props.theme} />
        </div>
    );
}
