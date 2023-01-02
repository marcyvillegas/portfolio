import { useState, useEffect } from 'react';

function BackToTopButton() {

    // STATE
    const [showButton, setShowButton] = useState(false);

    // USE EFFECT
    useEffect(() => {

        const handleShowButton = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener("scroll", handleShowButton);

        return () => {
            window.removeEventListener("scroll", handleShowButton);
        }

    }, []);

    // FUNCTION
    function handleScrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {showButton &&
                <button
                    className='fixed bg-[#8E2CCE] bottom-5 md:bottom-8 right-5 md:right-10 lg:right-20 p-3 rounded-full'
                    onClick={handleScrollToTop}>
                    <img src="/arrow-up.svg" alt="arrow up icon" />
                </button>}
        </div>
    )
}

export default BackToTopButton