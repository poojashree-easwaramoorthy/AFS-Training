import "../../assets/css/Home.css";
var Home = () =>{
    var styling = {
        fontSize:"30px",
        textDecoration:"underline",
        color:"blue",
        textAlign:"center"
    }
    return (
    <div>
        <h1 style={styling}>This is Home page</h1>
        <h2 style={styling}>Testing Styling</h2>
        <h2 className='boxModel'>Hello</h2>
    </div>
    )
}
export default Home;