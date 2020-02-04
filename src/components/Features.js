import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex justify-center flex-wrap bg-black border-b border-blue-grey-900 pb-16 mt-10 mx-auto">
    {gridItems.map(item => (
      <div key={item.text} className="bg-blue-grey-900  max-w-sm rounded shadow-lg mt-10 mx-5">
        <section className="section px-4 mt-4">
          <div className="text-center">
            <div
              style={{
                width: "240px",
                display: "inline-block"
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p className="text-blue-grey-200 italic py-8">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
