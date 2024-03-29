import { useState } from "react";
import Cards from "../cards/Cards";
import "./columns.scss";
import ReactModal from "react-modal";
import FormModal from "../formModalAddTask/FormModal";
ReactModal.setAppElement("#root");

function Columns({ todo, doing, done, dadosTask }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const todoText = "todo";
  return (
    <div className="container ">
      <div className="row gx-0">
        <div className="col-md-3 colunm-kanban mt-4 mb-4">
          <div className="box-title box-title-first text-center">
            <div></div>
            <div className="title-colunm">To-do</div>
            <div>
              <a className="btn-add-Task" onClick={openModal}>
                +
              </a>
              <ReactModal
                className="modal-custom"
                overlayClassName="modal-overlay"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <div className="header-modal">
                  <p className="text-center title-color-add-task">
                    Adicionar um novo card
                  </p>
                  <a className="close" onClick={closeModal}>
                    X
                  </a>
                  <FormModal
                    closeModal={closeModal}
                    lista={todoText}
                    dadosTask={dadosTask}
                  />
                </div>
              </ReactModal>
            </div>
          </div>
          {todo.map((todo) => (
            <>
              <Cards
                key={todo.id}
                title={todo.titulo}
                conteudo={todo.conteudo}
                lista={todo.lista}
                dadosTask={dadosTask}
                id={todo.id}
              />
            </>
          ))}
        </div>
        <div className="col-md-3 colunm-kanban mt-4 mb-4">
          <div className="box-title text-center">
            <div className="title-colunm">Doing</div>
          </div>
          {doing.map((doing) => (
            <>
              <Cards
                key={doing.id}
                title={doing.titulo}
                conteudo={doing.conteudo}
                lista={doing.lista}
                dadosTask={dadosTask}
                id={doing.id}
              />
            </>
          ))}
        </div>
        <div className="col-md-3 colunm-kanban mt-4 mb-4">
          <div className="box-title text-center">
            <div className="title-colunm">Done</div>
          </div>
          {done.map((done) => (
            <>
              <Cards
                key={done.id}
                title={done.titulo}
                conteudo={done.conteudo}
                lista={done.lista}
                dadosTask={dadosTask}
                id={done.id}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Columns;
