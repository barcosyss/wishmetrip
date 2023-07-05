import React, {useState} from 'react'
import './PackageCallRequest.css'
import Modal from 'react-modal';

const PackageCallRequest = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
      }
      function openModal() {
        setIsOpen(true);
      }
    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={props.show}
                onRequestClose={props.close}
                contentLabel="Example Modal"
                overlayClassName="Overlay"
                className='packagecallrequest'
            >
                <div className='d-flex'>
                    <h2 className='success-header'>Get Best Prices</h2>
                    <button className='close-modal-button' onClick={props.close}><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <form className='mt-4 p-4 text-align-left'>
                    <label>Phone no.<sup style={{ color: 'red' }}>*</sup></label>
                    <input type='number' className='form-control mt-2' placeholder='Phone number' />
                    <label className='mt-4'>Where do you want to go?</label>
                    <input type='number' className='form-control mt-2' placeholder='Destination' />
                    <label className='mt-4'>Tentative days</label>
                    <select className='form-control mt-2'>
                        <option>Less than 5 days</option>
                        <option>More than 5 days</option>
                        <option>More than 10 days</option>
                        <option>More than 15 days</option>
                        <option>More than 1 month</option>
                    </select>
                    <div className='text-align-right'>
                        <button className='btn btn-primary mt-3 text-al'>Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
            )
}
export default PackageCallRequest