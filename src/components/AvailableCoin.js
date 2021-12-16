import React from "react";
import styled from "styled-components";
import { FaChevronRight } from 'react-icons/fa';
import { ProgressBar } from "react-bootstrap";

const StyledAvailableCoin = styled.div`
  background-color: #fff;
  color: #B5B5BE;
  text-align: left;
  font-size: 16px;
  position: relative;
  top: -140px;
  padding: 20px;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 8px;
  background-image: url('/images/background-img.png');
  margin-bottom: -100px;
  .coin-number {
    color: #171725;
    font-size: 48px;
  }
  .view-tier {
    text-decoration: none;
    color: #0062FF;

  }
  .btn-coupon {
    display: block;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding: 12px 10px 16px;
    background: #171725;
    border-radius: 4px;
    margin-top: 20px;
  }
  .updated-date {
    text-align: center;
    font-size: 14px;
  }
}
  .progress-wapper {
    margin: 20px 0 33px;
  }
  .progress, .progress-bar {
      display: flex;
      overflow: hidden;
  }
  .progress {
      height: 5px;
      font-size: 12px;
      background-color: #e9ecef;
      border-radius: 0.25rem;
  }
  .progress-bar {
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #0d6efd;
    transition: width .6s ease;
  }
`
const AvailableCoin = () => {
  return (
    <StyledAvailableCoin>
      <div className="coin-wrapper">
        <label style={{fontSize: '14px'}}>Available Coin balance</label>
        <div className="coin-number">340 </div>
        <div className="progress-wapper">
          <ProgressBar now={50} active="true" />
        </div>
        <p>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</p>
        <div>
          <a href="/" className="view-tier">View tier benefits <FaChevronRight/> </a>
          <a type="button" href="/" className="btn-coupon">My Coupon</a>
        </div>
        <p className="updated-date">Updated : 02/11/2021</p>
      </div>  
    </StyledAvailableCoin>
  )

}
export default AvailableCoin;