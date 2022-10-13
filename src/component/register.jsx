import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import illustration_register from "../../src/images/illustration_register.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "../css/Login.css";
import form_validation from "./form_validation";


export const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    checked: false,
  });

   const [errors,setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
   })
   
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function handleSubmit (e)  {
    e.preventDefault (); 

    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      checked: false,
    });
    setErrors(form_validation(formData));
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-around  align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-4 mt-4  ml-0 pl-0">
            <div className="logo">
              <img src={logo} />
            </div>
            <h1>Manage the education more effectively with EdTech</h1>
            <img src={illustration_register} />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1  mt-5 mb-5">
            <p className="  pt-1 mb-5 text-end">
              Don't have an account? <Link to="/">Login</Link>
            </p>
            <h3>Get started absolutely free.</h3>
            <h5 className="mb-5 text-secondary ">
              Free forever. No credit card needed.
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <button
                  type="button"
                  className="btn btn-outline-secondary  w-50 py-2 btn-floating mx-1"
                >
                  <FaFacebook color="blue" />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary  w-50 py-2 btn-floating mx-1"
                >
                  <FaTwitter color="aqua" />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary w-50  py-2 btn-floating mx-1"
                >
                  <FaGoogle color="green" />
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <span className="line line-left" />
                <span className="fw-bold mx-3 mb-0 text-muted">OR</span>
                <span className="line line-right" />
              </div>

              <div className="d-flex justify-content-between">
                <div className="form-outline mb-4">
                  <input
                    name="firstname"
                    type="firstname"
                    id="firstname"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname &&(
                    <p className="errors text-danger">{errors.firstname}</p>
                  )}
                </div>
                <div className="form-outline mb-4 ">
                  <input
                    name="lastname"
                    type="lastname"
                    id="lastname"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname &&(
                    <p className="errors text-danger">{errors.lastname}</p>
                  )}
                </div>
              </div>

              <div className="form-outline mb-4">
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email &&(
                  <p className="errors text-danger">{errors.email}</p>
                )}
              </div>

              <div className="form-outline mb-3">
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password &&(
                  <p className="errors text-danger">{errors.password}</p>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    name="checked"
                    className="form-check-input me-2"
                    type="checkbox"
                    id="checked"
                    value={formData.checked}
                    checked={formData.checked}
                    onChange={() =>
                      setFormData({ ...formData, checked: !formData.checked })
                    }
                  />
                  <label className="form-check-label" htmlFor="checked">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2 ">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block w-100"
                >
                  Register
                </button>
              </div>
              <p className="  pt-1 my-3 text-center">
                By registering, I agree to EdTech{" "}
                <a href="#" className="link-dark">
                  {" "}
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="link-dark">
                  {" "}
                  Privacy Policy.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
