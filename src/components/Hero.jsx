import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero">

      <div className="overlay"></div>

      <motion.div

  className="hero-content"

  initial={{
    opacity:0,
    y:80
  }}

  animate={{
    opacity:1,
    y:0
  }}

  transition={{
    duration:1
  }}
>

        <h2>
          Find your next favorite movie.
        </h2>

        <p>
          Personalized movie recommendations
          based on your mood and genre.
        </p>

        <button
            onClick={() => {
            document.getElementById("genres").scrollIntoView({behavior: "smooth"});
  }}
>
  Start Exploring
</button>

     </motion.div>

    </section>
  );
}

export default Hero;