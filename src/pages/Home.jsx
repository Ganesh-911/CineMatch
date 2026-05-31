import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Features from "../components/Features";
import GenreButton from "../components/GenreButton";
import Footer from "../components/Footer";
function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Trending />
            <Features />
            <GenreButton />
            <Footer />
        </div>
    );
}
export default Home;