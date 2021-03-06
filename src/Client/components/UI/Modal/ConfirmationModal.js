import React, { Component } from 'react';
import Modal from './Modal';
import './LogoutModal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ConfirmationModal extends Component {
    state = {
        open: true
    }

    closeModalHandler = () => {
        this.setState({open: false});
        this.props.closeModal();
    }

    componentDidUpdate() {
        if(this.state.open === false) {
            this.props.closeModal(); // see [Modal.js]
        }
    }

render() {
          const closeIcon = (
            <FontAwesomeIcon
              onClick={this.closeModalHandler}
              className="exitModalIcon"
              icon={faTimes}
            />
          );

    return (
      <Modal
        show={this.state.open}
        classes={"Modal dimensions-logout"}
        modalClosed={this.closeModalHandler}
      >
        {closeIcon}
        <br></br>
        <h2>Delete item?</h2>
        <br></br>
        <div className="logoutBtn-container">
          <div className="logoutBtnModal">
            <button onClick={this.props.confirmDelete} className="">
              Delete
            </button>
          </div>
        </div>

        <br></br>

        <div className="logoutBtn-container">
          <div className="logoutBtnModal">
            <button
              onClick={() => {
                this.closeModalHandler();
              }}
              className=""
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );



}

}

export default ConfirmationModal;