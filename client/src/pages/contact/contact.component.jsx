import React, { useState } from "react";

import CustomButton from "../../components/custom-button/custom-button.component";
import "./contact.styles.scss";

const ContactPage = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    botField: "",
  });

  const setLabelClassName = (state) => {
    return `${state.length ? "shrink" : ""} form-input-label`;
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Clear Form
    setState({
      name: "",
      email: "",
      message: "",
      botField: "",
    });
  };

  return (
    <section className="contact-section-container" id="contact">
      <div className="contact-content-container">
        <h1 className="title">CONTACT</h1>
        <form
          className="contact-form"
          name="contact"
          method="post"
          action="/"
          onSubmit={handleSubmit}
        >
          <div className="group">
            <input
              id="name"
              className="form-input"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <label className={setLabelClassName(state.name)} htmlFor="name">
              Name
            </label>
          </div>
          <div className="group">
            <input
              id="email"
              className="form-input"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <label className={setLabelClassName(state.email)} htmlFor="email">
              Email
            </label>
          </div>
          <div className="group">
            <textarea
              id="message"
              className="form-input textarea"
              name="message"
              rows="7"
              value={state.message}
              onChange={handleChange}
              required
            />
            <label
              className={setLabelClassName(state.message)}
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <CustomButton type="submit">GET IN TOUCH</CustomButton>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
