import React from "react";
import { Link } from "react-router-dom";
import {
  WhatsAppOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function ContactMe() {
  return (
    <>
      <div id="bigBox-contactMe">
        <h2 id="contactMe-title">Contáctame</h2>
        <div id="contactMe-icons">
          <div className="contactMe-ico">
            <Link to="http://wa.me/1525528498032" target="_blank">
              <div className="contactMe-ico-icon">
                <WhatsAppOutlined />
              </div>
            </Link>
          </div>
          <div className="contactMe-ico">
            <Link to="mailto:alan.ga.g281301@gmail.com?subject=Te envio mensaje desde el link de tu portafolio">
              <div className="contactMe-ico-icon">
                <MailOutlined />
              </div>
            </Link>
          </div>
          <div className="contactMe-ico">
            <Link
              to="https://www.linkedin.com/in/alan-garc%C3%ADa-g%C3%B3mez-5528a3204/"
              target="_blank "
            >
              <div className="contactMe-ico-icon">
                <LinkedinOutlined />
              </div>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ContactMe;
