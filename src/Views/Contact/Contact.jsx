import React, { useEffect, useRef } from "react";
import Styles from "../../Styles/Page-Styles/Contact/Contact.module.css";

import { Link } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je8a17f",
        "template_eltdcq8",
        form.current,
        "sQqr418TGzaMZjJK7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };



  return (
    <div className={Styles.Contact}>
      <h3 className={Styles.Page_Title}>Contact</h3>

      <form ref={form} onSubmit={sendEmail} className={Styles.Contact_Form}>
          <fieldset className={Styles.Name__Email}>
            <input
              required
              type="text"
              className={Styles.Input}
              name="Name"
              placeholder="Email"
            />
            <input
              required
              type="text"
              className={Styles.Input}
              name="Email"
              placeholder="Name"
            />
          </fieldset>

          <fieldset className={Styles.Subject__Message}>
            <input
              required
              type="text"
              className={`${Styles.Input} ${Styles.Subject}`}
              name="Subject"
              placeholder="Subject"
            />
            <textarea
              required
              name="Message"
              className={`${Styles.Input} ${Styles.Message_Box}`}
              placeholder="Messgae"
              cols="30"
              rows="10"
            ></textarea>
          </fieldset>
        </form>

      <div className={Styles.Contact_Implore_Box}>
        <h3 className={Styles.Section_Description}>Join my Discord</h3>
        <div className={Styles.Button_Container}>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://discord.gg/ce7mtCbgmG"
          >
            <div
              className={`${Styles.Contact_Button} ${Styles.Discord__Button}`}
            >
              Discord
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
