// src/components/FeaturedAds.jsx
import React from "react";
import "../styles/FeaturedAds.css";

const FeaturedAds = () => {
  return (
    // heading
    <div className="container7">
      <div className="section-header">
        <div className="inline">
          <span className="red-box"></span>
          <h2>
            <span>Featured</span>
          </h2>
        </div>
        <div className="next-line">
          <h2><b>New Arrival</b></h2>
        </div>
      </div>

      {/* Boxs */}
      <div className="box4">
        <div className="firstbox card">
          <h2>PlayStation 5</h2>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <a href="/404.html" className="btn">
            Shop Now
          </a>
        </div>

        <div className="devision">
          <div className="secondbox card">
            <h2>Women’s Collections</h2>
            <p>Featured woman collections that give you another vibe.</p>
            <a href="/404.html" className="btn">
              Shop Now
            </a>
          </div>

          <div className="devision2">
            <div className="thirdbox card">
              <h2>Speakers</h2>
              <p>Amazon wireless speakers</p>
              <a href="/404.html" className="btn">
                Shop Now
              </a>
            </div>
            <div className="forthbox card">
              <h2>Perfume</h2>
              <p>GUCCI INTENSE OUD EDP</p>
              <a href="/404.html" className="btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAds;
