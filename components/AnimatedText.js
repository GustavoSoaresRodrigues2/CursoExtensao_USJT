import { useEffect, useState} from "react";

const AnimatedText = () => {

    const [wordIndex, setWordIndex] = useState(0);
    const [slideOut, setSlideOut] = useState('');
    const words = ['pet', 'amigo'];
    const transitionInterval = 5000;

    useEffect(() => {
        console.log("eae"); 
    }, [])

    return (
        <>
            <h2 className="static-text">
                Adote um&nbsp;
                <span className="word-transition">
                    <span className={`animated-text ${slideOut}`}></span>
                </span>
            </h2>
        </>
    )
}

export default AnimatedText