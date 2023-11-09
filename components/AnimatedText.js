import { useEffect, useState} from "react"

const AnimatedText = () => {

    const [wordIndex, setWordIndex] = useState(0)
    const [slideOut, setSlideOut] = useState('')
    const words = ['Pet', 'Amigo']
    const transitionInterval = 3000

    useEffect(() => {
        const intervalID = setInterval(transitionWord, transitionInterval)

        return () => {
            clearInterval(intervalID)
        }
        
    }, [wordIndex])

    const transitionWord = () => {
        const nextWordIndex = ( wordIndex + 1 ) % words.length
        setSlideOut('slide_out')
        setTimeout(() => {
            setWordIndex(nextWordIndex)
            setSlideOut('')
		}, 1000)
    }

    return (
        <>
            <h2 className="static_text">
                Adote um&nbsp;
                <span className="word_transition">
                    <span className={`animated_text ${slideOut}`}>{words[wordIndex]}</span>
                </span>
            </h2>
        </>
    )
}

export default AnimatedText