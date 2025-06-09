import { useState } from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ViewAllProperties from "../ViewAllProperties";

// Custom Button Group to place buttons below the carousel
const ButtonGroup = ({ next, previous }) => {
  const [Number, setNumber] = useState(1);
  return (
    <div>
      <div className="md:flex justify-between items-center hidden">
        <div>{Number} of 10</div>

        <div className="flex justify-center gap-[10px] mt-4">
          {Number > 1 && (
            <button
              className="px-4 py-2  text-white rounded-full"
              onClick={() => {
                previous();
                setNumber(Number - 1);
              }}
            >
              ←
            </button>
          )}

          {Number < 10 && (
            <button
              className="px-4 py-2  text-white rounded-full"
              onClick={() => {
                next();
                setNumber(Number + 1);
              }}
            >
              →
            </button>
          )}
        </div>
      </div>

      {/* ------------------------------------ */}

      <div className="flex justify-between items-center md:hidden mt-[4px]">
        <ViewAllProperties />

        <div className="flex justify-center gap-[10px]  items-center whitespace-nowrap">
          {Number > 1 && (
            <button
              className="px-4 py-2  text-white rounded-full"
              onClick={() => {
                previous();
                setNumber(Number - 1);
              }}
            >
              ←
            </button>
          )}

          <div>{Number} of 10</div>

          {Number < 10 && (
            <button
              className="px-4 py-2  text-white rounded-full "
              onClick={() => {
                next();
                setNumber(Number + 1);
              }}
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function WholeRenderedCard() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 860 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 860, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-own-custom-container ">
      <Carousel
        responsive={responsive}
        sliderClass="flex "
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        slidesToSlide={1}
        itemClass="flex justify-center"
      >
        {new Array(10).fill(1).map((item, index) => (
          <Card key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default WholeRenderedCard;
