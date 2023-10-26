import { useEffect, useState} from "react";

const Test = () => {
    
    const [test, setTest] = useState('');

    useEffect(() => {
        console.log("eae"); 
    }, [])
    return (
        <>
            <h1>Test</h1>
        </>
    )
}


export default Test
