import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CouponTab from "../../modules/CouponTab";
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
const StyledTab = styled(Tabs)`
  .react-tabs__tab-list {
    position: fixed;
    bottom: -2px;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 3;
    margin: 0;
    padding: 10px 0;
    border: 0;
    border-top: 2px solid #D5D5DC;
  }
  .react-tabs__tab {
    width: 18%;
    &:focus {
      box-shadow: none;
    }
    img {
      height: 30px;
    }
  }
  .react-tabs__tab--selected {
    border: none;
  }
  .btn-back {
    position: relative;
    span {
      position: absolute;
      top: 40px;
      left: 20px;
      padding: 10px;
      background-color: #fff;
      width: 24px;
      height: 22px;
      z-index: 2;
      border-radius: 50%;
    }
    svg {
      margin-top: 2px;
    }
  }
`
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ props, getNewState }) => {

  const [step, setStep] = useState(1);

  return (
    <>
      <StyledTab defaultIndex={step} selectedIndex={step} onSelect={index => setStep(index)}>
        <TabList>
          <Tab>
            <img src="/images/icon-home.svg" alt="Home" />
          </Tab>
          <Tab>
            <img src="/images/icon-extension.svg" alt="Coupon" />
          </Tab>
          <Tab>
            <img src="/images/icon-noti.svg" alt="Notification" />
          </Tab>
          <Tab>
            <img src="/images/icon-user.svg" alt="User" />
          </Tab>
        </TabList>
          {step > 0 && <div className="btn-back" onClick={() => setStep(0)}><span><FaChevronLeft/></span></div>}
        <TabPanel>
          <h2>Homepage</h2>
        </TabPanel>
        <TabPanel>
          <CouponTab />
        </TabPanel>
      </StyledTab>
    </>
  );
};
