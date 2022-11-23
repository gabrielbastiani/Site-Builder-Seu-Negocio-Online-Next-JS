import Modal from 'react-modal';
import styles from './ModalProjetos.module.css';
import { FiX } from 'react-icons/fi';


interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalProjetos({ isOpen, onRequestClose }: ModalProps) {

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
                <iframe width="700" height="400" src="https://gestaodeprojetos.builderseunegocioonline.com.br/forms/wtl/115f3d501a1ab2046945d5f07133c344" frameborder="0" sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" allowfullscreen></iframe>
            </div>

        </Modal>
    )
}