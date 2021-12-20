interface Props {
  buttonText: string;
  buttonHref: string;
  handleClick?: () => void;
  target?: "_blank";
}

export default function OneButton({
  buttonText,
  buttonHref,
  handleClick,
  target,
}: Props) {
  return (
    <div className="flex justify-center items-center">
      <a
        className="inline-block font-normal text-center cursor-pointer border border-gray-400 py-1.5 px-3.5 rounded btnGradient text-gray-50 uppercase tracking-wide"
        href={buttonHref}
        onClick={handleClick}
        target={target}
      >
        {buttonText}
      </a>
    </div>
  );
}
