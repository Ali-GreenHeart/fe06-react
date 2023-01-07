import PageContainer from "components/PageContainer"
import { connect } from "react-redux"
import { CounterActionTypes } from "reducers/CounterRedux"
import Button from "../../components/Button"

const CounterRedux = ({ count, dispatch }) => {
    console.log(count)
    return (
        <PageContainer>
            <div style={{ height: '100vh' }}>
                <h1>{count}</h1>
                <Button
                    txt="+"
                    clickleyende={() => {
                        dispatch({ type: CounterActionTypes.plus })
                    }} />
                <Button
                    txt="-"
                    clickleyende={() => {
                        dispatch({ type: CounterActionTypes.minus })
                    }}
                />
                <Button
                    txt="0"
                    clickleyende={() => {
                        dispatch({ type: CounterActionTypes.reset })
                    }}
                />
                <Button
                    txt="special"
                    clickleyende={() => {
                        const eded = +prompt('ededi daxil edin: ')
                        dispatch({ type: CounterActionTypes.special, data: eded })
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

const mapStoreToProps = (store) => {
    return store;
}

export default connect(mapStoreToProps)(CounterRedux);