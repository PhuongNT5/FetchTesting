import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  background: #171725;
  height: 428px;
  color: #fff;
  text-align: left;
  margin: 0 -20px;
  position: relative;
  h2 {
    font-size: 32px;
    margin-bottom: 8px;
  }
  p {
    color: #B5B5BE;
  }
  .banner-wrapper {
    position: absolute;
    top: 30%;
    left: 40px;
    right: 20px;
    transform: translateY(-30%);
  }
`
const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner-wrapper">
        <h2>Silver Tier</h2>
        <p>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
      </div>
    </StyledBanner>
  )

}
export default Banner;