import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import ReactMarkdown from "react-markdown";

function FormModal(props) {
  const addTask = async (dadosForm) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/cards/",
        dadosForm,
        config
      );
      console.log(response.data);
      props.closeModal();
      props.dadosTask();
      toast.success("Dados enviados com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Algo de errado ocorreu no envio!");
      props.closeModal();
    }
  };

  const formik = useFormik({
    initialValues: {
      titulo: "",
      conteudo: "",
      lista: "",
    },
    validationSchema: yup.object({
      titulo: yup.string().required("Campo requerido"),
    }),
    onSubmit: (values) => {
      const dados = {
        titulo: values.titulo,
        conteudo: values.conteudo,
        lista: props.lista,
      };
      console.log(dados);
      addTask(dados);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          id="titulo"
          placeholder="Titulo"
          type="text"
          {...formik.getFieldProps("titulo")}
        />
        {formik.touched.titulo && formik.errors.titulo ? (
          <div className="error mt-2">{formik.errors.titulo}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Escreva o conteúdo:"
          {...formik.getFieldProps("conteudo")}
        />
      </div>
      <input type="hidden" {...formik.getFieldProps("lista")} />
      <div className="mb-4 box-btn">
        <div className="d-grid gap-2 ">
          <button type="submit" className="btn btn-register">
            Incluir
          </button>
        </div>
      </div>
      {formik.values.conteudo !== "" && (
        <div className="visualisar-text">
          <ReactMarkdown>{formik.values.conteudo}</ReactMarkdown>
        </div>
      )}
    </form>
  );
}

export default FormModal;
