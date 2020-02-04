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
        <section className="bg-black pt-10">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-grey-200 text-2xl sm:text-4xl">
              Contact
            </h1>
            <div className="w-full max-w-xs sm:max-w-sm px-4 pb-16 mt-10">
              <form
                className="bg-black border border-blue-grey-900 rounded px-8 pt-6 pb-8"
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
                  <div className="control">
                    <input
                      className="bg-gray-900 active:bg-gray-900 text-gray-700 rounded w-full px-3 py-2 placeholder-gray-700 font-medium leading-tight focus:border-cyan-500 focus:outline-none mt-2"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <div className="control">
                    <input
                      className="bg-gray-900 active:bg-gray-900 text-gray-700 rounded w-full px-3 py-2 placeholder-gray-700 font-medium leading-tight focus:border-cyan-500 focus:outline-none mt-2"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field mt-6">
                  <div className="control">
                    <textarea
                      className="bg-gray-900 active:bg-gray-900 text-gray-700 rounded w-full px-3 py-2 placeholder-gray-700 font-medium leading-tight focus:border-cyan-500 focus:outline-none mt-2"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                      placeholder="Message"
                      rows="5"
                    />
                  </div>
                </div>
                <div className="field flex justify-center items-center">
                  <button
                    className="font-semibold text-gray-100 sm:text-lg bg-cyan-500 px-4 py-2 sm:px-5 sm:py-3 rounded mt-10 hover:bg-cyan-600 focus:bg-cyan-600"
                    type="submit"
                  >
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
