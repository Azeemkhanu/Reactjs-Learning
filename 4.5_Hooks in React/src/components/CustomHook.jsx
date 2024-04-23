import {useCustomCounter} from '../hooks/useCustomCounter'
export default function CustomHook() {
    const {count , handleCounter} = useCustomCounter()
    return (
        <div>
            <h2>Count is: <span>{count}</span></h2>
            <button onClick={handleCounter}>Click me to Count!</button>
        </div>
    );
}