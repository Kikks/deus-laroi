import type { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import useDrag from '@/hooks/useDrag';
import usePreventBodyScroll from '@/hooks/usePreventBodyScroll';

import Card from './Card';
import { features } from './data';

type ScrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const onWheel = (apiObj: ScrollVisibilityApiType, ev: React.WheelEvent) => {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
};

const BuildingConstructionManagement = () => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }: ScrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          // eslint-disable-next-line no-param-reassign
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <section
      id="building-construction-management"
      className="icon-pattern-bg grid w-full place-items-center px-5 py-10 md:py-16 lg:py-20 lg:px-10"
    >
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <h3 className="relative font-garamond text-sm font-bold uppercase text-tertiary-main before:absolute before:left-[0%] before:top-7 before:h-1 before:w-14 before:translate-x-[0%] before:rounded-md before:bg-secondary-dark md:text-lg md:before:top-10">
          Building-Construction Management
        </h3>

        <div className="flex w-full flex-col gap-10 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="font-garamond text-3xl font-medium md:text-3xl">
              We have got you covered in every area of{' '}
              <br className="hidden lg:block" /> your construction project with{' '}
              <span className="text-secondary-dark">
                building-construction management
              </span>
              .
            </h1>
          </div>

          <div className="flex-1">
            <p className="lg:text-lg">
              We cover the area of construction, renovation and maintenance of
              building structures and facilities (both private and commercial
              development). We also proffer design solutions to various
              construction constraints and challenges. What we offer in this
              service includes;
            </p>
          </div>
        </div>
      </div>

      <div
        className="container mt-10 w-full overflow-hidden"
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <ScrollMenu
          scrollContainerClassName="space-x-5 lg:space-x-10 flex py-5"
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {features.map((feature, index) => (
            // @ts-ignore
            <Card
              itemId={index} // NOTE: itemId is required for track items
              title={feature.title}
              key={index}
              bullets={feature.bullets}
              // onClick={handleClick(id)}
              // selected={isItemSelected(id)}
            />
          ))}
        </ScrollMenu>

        <div className="mt-5 flex w-full items-center justify-end gap-3 text-sm font-medium text-secondary-dark lg:mt-10">
          <span>Swipe</span>
          <figure className="grid aspect-square w-6 place-items-center">
            <img
              src="/assets/icons/RightArrow.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default BuildingConstructionManagement;
