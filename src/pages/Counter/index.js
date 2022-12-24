import PageContainer from "components/PageContainer"
import { useState } from "react"
import Button from "../../components/Button"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <PageContainer>
            <div style={{ height: '100vh' }}>
                <h1>{count}</h1>
                <Button
                    txt="+"
                    clickleyende={() => {
                        setCount(count + 1)
                    }} />
                <Button
                    txt="-"
                    clickleyende={() => {
                        setCount(count - 1)
                    }}
                />
                <Button
                    txt="0"
                    clickleyende={() => {
                        setCount(0)
                    }}
                />
                <Button
                    txt="special"
                    clickleyende={() => {
                        const eded = +prompt('ededi daxil edin: ')
                        setCount(eded)
                    }}
                />
                <Button
                    txt="console"
                    clickleyende={() => {
                        console.log(count)
                    }}
                />
            </div>
        </PageContainer>
    )
}


export default Counter;