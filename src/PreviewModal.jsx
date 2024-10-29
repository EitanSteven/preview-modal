import React, { useState, useEffect } from 'react';

const PreviewModal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!isOpen) {
        return <button onClick={() => setIsOpen(true)}>Abrir Preview</button>;
    }

    return (
        <div style={{
            zIndex: 10000,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: '#0000007c',
                padding: '20px',
                borderRadius: '8px',
                position: 'relative'
            }}>
                <button
                    style={{
                        zIndex: 10001,
                        color: '#fff',
                        border: 'solid 2px #fff',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                    onClick={handleClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default PreviewModal;
