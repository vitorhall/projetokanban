import ReactMarkdown from "react-markdown";
import "./cards.scss";
import ReactModal from "react-modal";
import { useState } from "react";
import FormEditModal from "../formEditModal/FormEditModal";
import axios from "axios";
import { toast } from "react-toastify";
import { TiTimes } from "react-icons/ti";

function Cards({ title, conteudo, lista, dadosTask, id }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const removeTask = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.delete(
        "http://localhost:5000/cards/" + id,
        config
      );
      console.log(response.data);
      toast.success("Cartão removido com sucesso!");
      dadosTask();
    } catch (error) {
      console.error(error);
      toast.error("Houve um problema para remover!");
    }
  };
  return (
    <div className="card card-custom m-3" key={id}>
      <div className="card-body">
        <h5 className="card-title title-custom">{title}</h5>
        <div className="visualisar-text text-color">
          <ReactMarkdown>{conteudo}</ReactMarkdown>
        </div>
        <div className="card-footer ">
          <div className="box-buttons">
            <button
              type="button"
              onClick={openModal}
              className=" btn-edit btn-custom"
            >
              Editar
            </button>
            <button
              type="button"
              onClick={removeTask}
              className="btn-custom btn-remove"
            >
              Remover
            </button>
          </div>
        </div>
        <ReactModal
          className="modal-custom"
          overlayClassName="modal-overlay"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="">
            <p className="text-center title-color-add-task">
              Adicionar um novo card
            </p>
            <a className="close" onClick={closeModal}>
              <TiTimes />
            </a>
            <FormEditModal
              id={id}
              closeModal={closeModal}
              lista={lista}
              dadosTask={dadosTask}
              title={title}
              conteudo={conteudo}
            />
          </div>
        </ReactModal>
      </div>
    </div>
  );
}

export default Cards;
