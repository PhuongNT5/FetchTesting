import React from "react";
import styled from "styled-components";
import AvailableCoin from "../../components/AvailableCoin";
import Banner from "../../components/Banner";
import Coupons from "../../components/Coupons";
import { COUPONS } from "../contants";

const StyledCouponTab = styled.div`
  margin-top: -20px;
  padding: 0 20px 40px;
`
const CouponTab = ({step}) => {
  
  return (
    <StyledCouponTab>
      <div className="page-content">
          <Banner />
          <AvailableCoin />
          {COUPONS.length > 0 && (
            COUPONS.map((item, index) => {
              return <Coupons key={index} coupons={item}/>
            })
          )}
      </div>
    </StyledCouponTab>
  )

}
export default CouponTab;