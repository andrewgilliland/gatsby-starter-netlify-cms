import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-gray-900 text-2xl sm:text-4xl">Contact</h1>
            <div className="w-full max-w-xs sm:max-w-sm px-4 pb-16 mt-10">
              <form
                className="bg-white shadow-lg rounded px-8 pt-6 pb-8"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label
                    className="block text-gray-900 font-semibold"
                    htmlFor={"name"}
                  >
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="bg-gray-100 rounded w-full px-3 py-2 text-gray-400 font-medium leading-tight focus:outline-none mt-2"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <label
                    className="block text-gray-900 font-semibold"
                    htmlFor={"email"}
                  >
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="bg-gray-100 rounded w-full px-3 py-2 text-gray-400 font-medium leading-tight focus:outline-none mt-2"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <label
                    className="block text-gray-900 font-semibold"
                    htmlFor={"message"}
                  >
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="bg-gray-100 rounded w-full px-3 py-2 text-gray-400 font-medium leading-tight focus:outline-none mt-2"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field flex justify-center items-center">
                  <button className="font-semibold text-gray-100 sm:text-lg bg-blue-700 px-4 py-2 sm:px-5 sm:py-3 rounded mt-10 hover:bg-blue-600 focus:bg-blue-600" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
