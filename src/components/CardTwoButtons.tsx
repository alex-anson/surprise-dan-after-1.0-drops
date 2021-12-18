interface Props {
  imgSrc: string;
  textTitle: string;
  textParagraph: string;
  buttonOneText: string;
  buttonOneHref?: string;
  onClickButtonOne?: () => void;
  buttonTwoText: string;
  buttonTwoHref?: string;
  onClickButtonTwo?: () => void;
}

export default function CardTwoButtons({
  imgSrc,
  textTitle,
  textParagraph,
  buttonOneText,
  buttonOneHref,
  onClickButtonOne,
  buttonTwoText,
  buttonTwoHref,
  onClickButtonTwo,
}: Props) {
  return (
    <div className="col mb-3">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top img-thumbnail" alt="#" />
        <div className="card-body text-center">
          <h5 className="card-title fs-4 fw-bold">{textTitle}</h5>
          <p className="card-text my-2">{textParagraph}</p>
          <div className="flex flex-col justify-center items-center mt-4 mb-1">
            <a
              className="btn btn-outline-dark mb-3"
              href={buttonOneHref}
              onClick={onClickButtonOne}
            >
              {buttonOneText}
            </a>
            <a
              className="btn btn-outline-dark"
              href={buttonTwoHref}
              onClick={onClickButtonTwo}
            >
              {buttonTwoText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
