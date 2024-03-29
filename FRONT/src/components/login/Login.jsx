import { useFormik } from "formik";
import "./login.scss";

import * as yup from "yup";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const sendLogin = async (dadosForm) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login/",
        dadosForm
      );
      localStorage.setItem("token", response.data);
      if (response.data !== "") {
        toast.success("Login realizado com sucesso!");
        navigate("/board");
      } else {
        toast.error("Login ou senha incorretos!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yup.object({
      login: yup.string().required("Campo requerido"),
      password: yup.string().required("Campo requerido"),
    }),
    onSubmit: (values) => {
      const dados = {
        login: values.login,
        senha: values.password,
      };

      sendLogin(dados);
    },
  });

  return (
    <div className="login-content">
      <div className="login-box">
        <div className="card card-bg card-outline-orange">
          <div className="card-header text-center">
            <img
              src={logo}
              alt="Volta do mundo bamba"
              height="70"
              width="70"
              className="img-fluid"
            />
          </div>
          <div className="card-body ">
            <p className="login_text_color text-center">
              Faça login para iniciar sua sessão
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  id="login"
                  placeholder="Login"
                  type="text"
                  {...formik.getFieldProps("login")}
                />
                {formik.touched.login && formik.errors.login ? (
                  <div className="error mt-2">{formik.errors.login}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  id="password"
                  placeholder="Senha"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error mt-2">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <div className="d-grid gap-2 ">
                  <button type="submit" className="btn btn-register">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
