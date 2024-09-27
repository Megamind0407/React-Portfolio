import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={styles.scrollToTopBtn}
                >
                    <IoIosArrowDropupCircle style={styles.iconStyle} />
                </button>
            )}
        </div>
    );
};

const styles = {
    scrollToTopBtn: {
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        padding: '5px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        borderRadius: '50%',
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
    },
    iconStyle: {
        fontSize: '70px',
        color:'#fff',
        transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
    },
    iconHoverStyle: {
        color: '#0056b3',
        transform: 'scale(1.1)',
    },
};

export default ScrollToTop;
