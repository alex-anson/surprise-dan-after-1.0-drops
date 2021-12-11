export default function Card({
  imgSrc,
  textTitle,
  textParagraph,
  textButton,
  buttonHref,
  optionalSecondButtonText,
  optionalSecondButtonHref,
}) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top img-thumbnail" alt="#" />
        <div className="card-body text-center">
          <h5 className="card-title fs-4 fw-bold">{textTitle}</h5>
          <p className="card-text my-2">{textParagraph}</p>
          <div className="d-flex justify-content-center mt-4 mb-1">
            <a className="btn btn-outline-dark" href={buttonHref}>
              {textButton}
            </a>
            {optionalSecondButtonHref ? (
              <a
                className="btn btn-outline-dark"
                href={optionalSecondButtonHref}
              >
                {optionalSecondButtonText}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
