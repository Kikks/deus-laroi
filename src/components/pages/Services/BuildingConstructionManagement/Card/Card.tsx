import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const Card = ({
  onClick,
  title,
  itemId,
  bullets,
}: {
  onClick?: (value: any) => void;
  title: string;
  bullets: string[];
  itemId: number;
}) => {
  const visibility = useContext(VisibilityContext);

  return (
    <div
      onClick={() => (onClick ? onClick(visibility) : {})}
      className="flex min-h-[450px] w-[90vw] max-w-[350px] flex-col items-center gap-7 self-stretch rounded-md bg-white px-3 py-5 shadow-lg lg:min-h-[450px] lg:w-[27vw] lg:max-w-[380px] lg:px-5"
      tabIndex={itemId}
    >
      <h3 className="text-center font-garamond text-2xl font-medium lg:text-[1.3rem]">
        {title}
      </h3>

      <ul className="ml-5 grid list-disc gap-4">
        {bullets.map((bullet, index) => (
          <li className="text-sm" key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
