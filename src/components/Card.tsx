interface Props {
  imgSrc: string;
  textTitle: string;
  textParagraph: string;
  children: React.ReactNode;
}

export default function Card({
  imgSrc,
  textTitle,
  textParagraph,
  children,
}: Props) {
  return (
    <div className="mb-3">
      <div className="relative h-full flex flex-col bg-gray-50 border border-gray-700 border-opacity-20 rounded shadow-xl w-full max-w-md mx-auto">
        <img
          src={imgSrc}
          className="w-full shadow-sm h-auto rounded p-1.5 bg-gray-50"
          alt="#"
        />
        <div className="p-4 text-center flex flex-col justify-around h-full">
          <h5 className="text-2xl font-light mb-2">{textTitle}</h5>
          <p className="my-2">{textParagraph}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
