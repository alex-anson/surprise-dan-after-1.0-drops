interface Props {
  imgSrc: string;
  textTitle: string;
  textParagraph: string;
  buttonText: string;
  buttonHref: string;
}

export default function CardOneButton({
  imgSrc,
  textTitle,
  textParagraph,
  buttonText,
  buttonHref,
}: Props) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top img-thumbnail" alt="#" />
        <div className="card-body text-center">
          <h5 className="card-title fs-4 fw-bold">{textTitle}</h5>
          <p className="card-text my-2">{textParagraph}</p>
          <div className="d-flex justify-content-center mt-4 mb-1">
            <a className="btn btn-outline-dark" href={buttonHref}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
