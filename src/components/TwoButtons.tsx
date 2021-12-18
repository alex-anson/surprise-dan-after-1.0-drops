interface Props {
  buttonOneText: string;
  buttonOneHref?: string;
  onClickButtonOne?: () => void;
  buttonTwoText: string;
  buttonTwoHref?: string;
  onClickButtonTwo?: () => void;
  target?: "_blank";
}

export default function TwoButtons({
  buttonOneText,
  buttonOneHref,
  onClickButtonOne,
  buttonTwoText,
  buttonTwoHref,
  onClickButtonTwo,
  target,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center mt-4 mb-1">
      <a
        className="inline-block font-normal text-center cursor-pointer border border-gray-400 py-1.5 px-3.5 rounded mb-4 btnGradient text-gray-50"
        href={buttonOneHref}
        onClick={onClickButtonOne}
        target={target}
      >
        {buttonOneText}
      </a>
      <a
        className="inline-block font-normal text-center cursor-pointer border border-gray-400 py-1.5 px-3 rounded btnGradient text-gray-50"
        href={buttonTwoHref}
        onClick={onClickButtonTwo}
        target={target}
      >
        {buttonTwoText}
      </a>
    </div>
  );
}
