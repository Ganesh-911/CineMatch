import { useState } from "react";

import Recommendations from "./Recommendations";

const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Feel-Good",
  "Thriller",
  "Sci-Fi",
  "Horror",
  "Sports"
];

function GenreButtons() {

  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("en");


  return (
    <>

      <section
        className="genres"
        id="genres"
      >

        <h2>
          Choose Your Mood
        </h2>
        <div className="search-bar">

          <input
            type="text"

            placeholder="Search movies..."

            value={searchTerm}

            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>
        <div className="language-select">

          <select
            value={language}

            onChange={(event) =>
              setLanguage(event.target.value)
            }
          >

            <option value="en">
              English
            </option>

            <option value="hi">
              Hindi
            </option>

            <option value="te">
              Telugu
            </option>

            <option value="ta">
              Tamil
            </option>

            <option value="ko">
              Korean
            </option>

            <option value="ja">
              Japanese
            </option>

          </select>

        </div>

        <div className="genre-container">

          {genres.map((genre, index) => {
            return (
              <button
                className={
                  selectedGenre === genre
                    ? "genre-btn active"
                    : "genre-btn"
                }

                onClick={() =>
                  setSelectedGenre(genre)
                }

                key={index}
              >
                {genre}
              </button>
            );
          })}

        </div>

      </section>

      <Recommendations genre={selectedGenre} searchTerm={searchTerm} language={language} />

    </>
  );
}

export default GenreButtons;