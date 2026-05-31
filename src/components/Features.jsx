const features = [
  {
    title: "Mood-Based Suggestions",
    text:
      "Get movie recommendations based on your mood and preferences."
  },

  {
    title: "Trending Movies",
    text:
      "Discover the most popular movies people are watching right now."
  },

  {
    title: "OTT Availability",
    text:
      "Find where your favorite movies are streaming instantly."
  },

  {
    title: "Fast Discovery",
    text:
      "Stop wasting time searching and start watching faster."
  }
];

function Features() {
  return (
    <section className="features">

      <h2>
        Why Choose CineMatch?
      </h2>

      <div className="feature-grid">

        {features.map((feature, index) => {
          return (
            <div className="feature-card" key={index}>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Features;