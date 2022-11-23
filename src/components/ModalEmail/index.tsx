import Modal from 'react-modal';
import styles from './ModalEmail.module.css';
import { FiX } from 'react-icons/fi';


interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalEmail({ isOpen, onRequestClose }: ModalProps) {

    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'black'
        }
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >

            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
                style={{ background: 'transparent', border: 0, cursor: 'pointer' }}
            >
                <FiX size={45} color="red" />
            </button>

                <div className={styles.modal}>
                <iframe width="700" height="400" src="https://gestaodeprojetos.builderseunegocioonline.com.br/forms/wtl/945b99adb70f0ff740ea177f6d35e332" frameBorder="0" sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" allowFullScreen></iframe>
                </div>

        </Modal>
    )
}