import { useState } from "react"
// react-router-dom
function Home(){
    const [count , setCount] = useState(0)
    console.log(count)
    // let count = 0
    function increase(){
        // alert('increase')
        // count ++
        // console.log(count)
        setCount(count + 1)
    }
    function decrease(){
        // alert('decrease')
        // count --
        // console.log(count)
        setCount(count - 1)
    }
    return(
        <div>
            
            <h1>homw page</h1>
            <button onClick={increase}>increase</button> 
            <button onClick={decrease}>decrease</button>
        </div>
    )
}
export default Home
// export const Home = () => {
//     return <h1>
//         This is home page
//     </h1>;
// };