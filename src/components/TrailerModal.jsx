function TrailerModal({

  trailerKey,
  closeModal

}) {

  if (!trailerKey) return null;

  return (

    <div
      className="modal-overlay"

      onClick={closeModal}
    >

      <div
        className="modal-content"

        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <iframe
          width="100%"
          height="500"

          src={
            `https://www.youtube.com/embed/${trailerKey}`
          }

          title="Trailer"

          allowFullScreen
        />

      </div>

    </div>
  );
}

export default TrailerModal;