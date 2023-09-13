import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import InputError from "@/Components/InputError";

import InputText from "@/Elements/InputText/InputText";

import "../../../assets/style.scss";
import "./Login.scss";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <section className="container-fluid login-section">
      <div className="row mx-auto login-wrapper">
        <div className="d-flex flex-column justify-content-center">
          <div className="row title-style">
            <div className="col-6">
              <h1>Login</h1>
            </div>
          </div>

          <div className="form-style">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  value={data.email}
                  className="input-style form-control"
                  onChange={(e) => setData("email", e.target.value)}
                  required
                  isFocused={true}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  value={data.password}
                  className="input-style form-control"
                  onChange={(e) => setData("password", e.target.value)}
                  required
                />

                <InputError message={errors.password} className="mt-2" />
              </div>
              <div className="mb-3">
                <label className="d-flex items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={data.remember}
                    name="remember"
                    onChange={(e) => setData("remember", e.target.checked)}
                  />
                  <span className="ms-3">Remember me</span>
                </label>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={processing}
                >
                  Submit
                </button>
              </div>

              <div className="d-flex mb-2">
                {canResetPassword && (
                  <Link href={route("password.request")}>
                    Forgot your password?
                  </Link>
                )}
              </div>
              <div className="d-flex">
                <Link href={route("register")}>Not Register?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
