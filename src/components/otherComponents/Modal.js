import React, { useState } from 'react';
import './Modal.css';

function Modal({ children, onClose, formType }) {
    const [currentFormType, setCurrentFormType] = useState(formType);

    const handleAddQuestionClick = () => {
        setCurrentFormType('question');
    };

    const handleCreatePostClick = () => {
        setCurrentFormType('post');
    };

    const hancleClose = () => {
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <div className="modal-container">
                    <div className="modal-heading">
                        <button
                            className={currentFormType === 'question' ? 'active' : ''}
                            onClick={handleAddQuestionClick}
                        >
                            Add Question
                        </button>
                        <button
                            className={currentFormType === 'post' ? 'active' : ''}
                            onClick={handleCreatePostClick}
                        >
                            Create Post
                        </button>
                    </div>
                    <div className="modal-body">
                        {currentFormType === '' ? (
                            <div>Please select a form</div>
                        ) : currentFormType === 'question' ? (
                            <form>
                                <div>
                                    <textarea id="content" placeholder='Ask a Question' rows="5"></textarea>
                                </div>
                            </form>
                        ) : (
                            <form>
                                <div>
                                    <textarea id="content" placeholder='Create a new Post' rows="5"></textarea>
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="submit-modal">
                        <button onClick={hancleClose}>Cancel</button>
                        <button onClick={hancleClose}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

