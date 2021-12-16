import React from "react";
import styled from 'styled-components';


const StyledItemCard = styled.div`
  font-size: 16px;
  box-shadow: 0px 2px 3px rgb(23 23 37 / 4%);
  border-radius: 4px;
  height: 100%;
  .coupon-content {
    padding: 16px;
    span {
      color: #fff;
      border-radius: 50%;
      background-color: #696974;
      padding: 0px 6px 2px;
      font-size: 12px;
    }
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  .coins {
    font-weight: bold;
    color: #696974;
    &.insufficient {
      color: #0062FF;
    }
  }
  .description {
    margin-top: 8px;
    color: #92929D;
  }
  .insufficient-coins {
    color: #0062FF;
    font-size: 14px;
  }
`
const ItemCard = ({coupon}) => {
  return (
    <StyledItemCard>
      <img src={coupon.img} alt={coupon.coin} />
      <div className="coupon-content">
        <label className={coupon.insufficient ? 'insufficient coins' : 'coins'}>
          {!coupon.insufficient && <span>L</span>}&nbsp;
          {coupon.coin} &nbsp;coins
        </label>
        <p className="description">{coupon.description}</p>
        {!coupon.insufficient &&<p className="insufficient-coins">Insufficient coins</p>}
      </div>
    </StyledItemCard>
  )

}
export default ItemCard;