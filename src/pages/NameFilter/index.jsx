import PageContainer from "components/PageContainer";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const arr = [
    'ali',
    'aqil',
    'nusret',
    'aysu',
    'sabuha',
    'yunis',
    'agakerim',
    'eleonora'
]

const NameFilterPage = () => {
    const [names, setNames] = useState(arr)

    const inputRef = useRef()
    
    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    return (
        <>
            <PageContainer>
                <input ref={inputRef} type="text"
                    onChange={(e) => {
                        setNames(arr.filter((ad) => ad.startsWith(e.target.value)))
                    }}
                />
                <div>
                    {
                        names.map((ad) => <p key={uuidv4()}>{ad}</p>)
                    }
                </div>
            </PageContainer>
        </>
    )
}


export default NameFilterPage;