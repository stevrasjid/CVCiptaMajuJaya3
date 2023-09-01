import { useEffect } from "react";

import InputError from "@/Components/InputError";
import InputText from "@/Elements/InputText/InputText";
import { Head, Link, useForm } from "@inertiajs/react";

import "../../../assets/style.scss";
import "./Register.scss";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <section className="container-fluid register-section">
      <div className="row mx-auto register-wrapper">
        <div className="d-flex flex-column justify-content-center">
          <div className="row title-style">
            <div className="col-6">
              <h1>Register</h1>
            </div>
          </div>

          <div className="form-style">
            <form onSubmit={submit}>
              <div class="mb-3">
                <label htmlFor="Nama" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  value={data.name}
                  className="input-style form-control"
                  onChange={(e) => setData("name", e.target.value)}
                  required
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div class="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  value={data.email}
                  className="input-style form-control"
                  pattern={pattern}
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />

                <InputError message={errors.email} className="mt-2" />
              </div>
              <div class="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  value={data.password}
                  className="input-style form-control"
                  pattern={pattern}
                  onChange={(e) => setData("password", e.target.value)}
                  required
                />

                <InputError message={errors.password} className="mt-2" />
              </div>
              <div class="mb-3">
                <label htmlFor="Confirm Password" className="form-label">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={data.password_confirmation}
                  className="input-style form-control"
                  pattern={pattern}
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                  required
                />
                <InputError
                  message={errors.password_confirmation}
                  className="mt-2"
                />
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={processing}
                >
                  Submit
                </button>
              </div>

              <div className="d-flex">
                <Link href={route("login")}>Already Have An Account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
