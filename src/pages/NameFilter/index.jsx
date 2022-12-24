import PageContainer from "components/PageContainer";
import { useState } from "react";
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

    return (
        <>
            <PageContainer>
                <input type="text"
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