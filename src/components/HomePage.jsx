import ironhackersImg from "../assets/ironhackers.avif"

function HomePage(){
    return(
        <main className="HomePage">
            <h1>Welcome</h1>
            <img src={ironhackersImg} alt="ironhackers" />
        </main>
    )
}

export default HomePage;