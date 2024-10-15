import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;


class Contact extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    script.charset = "utf-8";

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "47720628",
          formId: "8004e1e3-ecf8-4c81-bd5c-6703706a6f2f",
          target: "#hubspotForm",
        });
      }
    };

    document.body.appendChild(script);
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <div id="hubspotForm"></div>{" "}
                {/* HubSpot Form will be rendered here */}
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
                  Our organization is active across various social media
                  platforms. Feel free to reach out to us, and we will respond
                  within 24 hours.
                </p>
               
              </div>
            </div>
          </Fade>

          
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
