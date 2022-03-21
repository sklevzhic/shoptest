import useResizeWindow from "../hooks/useOutsideClick";
import {useRef} from "react";

function Modal({agreeOrder, closeModal}) {
    let modal = useRef()
    useResizeWindow(modal, closeModal)

    return <div  style={{position: "absolute", left: "0", top: "0", width: "100vw"}}>
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                      <p>Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.</p>
                  </div>
                  <div className="modal-footer">
                      <button type="button" onClick={closeModal} className="btn btn-error">Close</button>
                      <button type="button" onClick={agreeOrder} className="btn btn-success">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
}

export default Modal;
