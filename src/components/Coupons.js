import React from "react";
import styled from 'styled-components';
import ItemCard from "./ItemCard";

const StyledCoupons = styled.div`
  text-align: left;
  margin: 20px 0 40px;

  .coupons-scroll {
    overflow: auto;
    &::-webkit-scrollbar {
    display: none;
  }
  .coupons-wrapper {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 -8px;
    padding-bottom: 3px;

  }
  .coupons-item {
    flex: 0 0 65%;
    padding: 0 10px;
  }
  @media screen and (min-width: 992px) {
    .coupons-item {
      flex: 0 0 33%;
    }
  }
`

const Coupons = ({coupons}) => {
  return (
    <StyledCoupons>
      <h3>{coupons.type}</h3>
      <div className="coupons-scroll">
        {
          coupons.items.length > 0 && (
            <div className="coupons-wrapper">
              {
                coupons.items.map((item, index) => {
                  return (
                    <div className="coupons-item">
                      <ItemCard key={index} coupon={item}/>
                    </div>
                  )
                })
              }
            </div>

          )
        }
      </div>

    </StyledCoupons>
  )

}
export default Coupons;