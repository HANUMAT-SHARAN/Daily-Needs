import React from "react";
import { useToast } from "@chakra-ui/react";
import "./Checkout.css";
import CheckoutSvg from "./CheckoutSvg";
const Checkout = () => {
  const toast = useToast();
  return (
    <div className="screen flex-center">
      <form className="popup flex p-lg">
        <div className="close-btn pointer flex-center p-sm">
          <i className="ai-cross"></i>
        </div>

        {/* <!-- CARD FORM --> */}
        <div className="flex-fill flex-vertical">
          <div className="header flex-between flex-vertical-center">
            <div className="flex-vertical-center">
              <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
              <span className="title">
                <strong>Daily</strong>
                <span>Object</span>
              </span>
            </div>
          </div>
          <div className="card-data flex-fill flex-vertical">
            {/* Card Number */}
            <div className="flex-between flex-vertical-center">
              <div className="card-property-title">
                <strong>Card Number</strong>
                <span>Enter 16-digit card number on the card</span>
              </div>
              <div className="f-main-color pointer">
                <i className="ai-pencil"></i> Edit
              </div>
            </div>

            {/* <!-- Card Field --> */}
            <div className="flex-between">
              <div className="card-number flex-vertical-center flex-fill">
                <div className="card-number-field flex-vertical-center flex-fill">
                 <CheckoutSvg/>
                  <input
                    className="numbers"
                    type="number"
                    min="1"
                    max="9999"
                    placeholder="0000"
                  />
                  <input className="numbers" type="number" placeholder="0000" />
                  <input className="numbers" type="number" placeholder="0000" />
                  <input
                    className="numbers"
                    type="number"
                    placeholder="0000"
                    data-bound="carddigits_mock"
                    data-def="0000"
                  />
                </div>
                <i className="ai-circle-check-fill size-lg f-main-color"></i>
              </div>
            </div>

            {/* <!-- Expiry Date --> */}
            <div className="flex-between">
              <div className="card-property-title">
                <strong>Expiry Date</strong>
                <span>Enter the expiration date of the card</span>
              </div>
              <div className="card-property-value flex-vertical-center">
                <div className="input-container half-width">
                  <input
                    className="numbers"
                    data-bound="mm_mock"
                    data-def="00"
                    type="number"
                    min="1"
                    max="12"
                    step="1"
                    placeholder="MM"
                  />
                </div>
                <span className="m-md">/</span>
                <div className="input-container half-width">
                  <input
                    className="numbers"
                    data-bound="yy_mock"
                    data-def="01"
                    type="number"
                    min="23"
                    max="99"
                    step="1"
                    placeholder="YY"
                  />
                </div>
              </div>
            </div>

            {/* <!-- CCV Number --> */}
            <div className="flex-between">
              <div className="card-property-title">
                <strong>CVC Number</strong>
                <span>
                  Enter card verification code from the back of the card
                </span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input id="cvc" type="password" />
                  <i
                    id="cvc_toggler"
                    data-target="cvc"
                    className="ai-eye-open pointer"
                  ></i>
                </div>
              </div>
            </div>

            {/* <!-- Name --> */}
            <div className="flex-between">
              <div className="card-property-title">
                <strong>Cardholder Name</strong>
                <span>Enter cardholder's name</span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input
                    id="name"
                    data-bound="name_mock"
                    data-def="Mr. Cardholder"
                    type="text"
                    className="uppercase"
                    placeholder="CARDHOLDER NAME"
                  />
                  <i className="ai-person"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="action flex-center">
            <button
              className="b-main-color pointer"
              onClick={() =>
                toast({
                  position: "top",
                  title: "Successful",
                  description: "Your payment has been done successfully.",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                })
              }
            >
              Pay Now
            </button>
          </div>
        </div>

        {/* <!-- SIDEBAR --> */}
        <div className="sidebar flex-vertical">
          <div className="purchase-section flex-fill flex-vertical">
            <div className="card-mockup flex-vertical">
              <div className="flex-fill flex-between">
                <i className="ai-bitcoin-fill size-xl f-secondary-color"></i>
                <i className="ai-wifi size-lg f-secondary-color"></i>
              </div>
              <div>
                <div
                  id="name_mock"
                  className="size-md pb-sm uppercase ellipsis"
                >
                  mr. Cardholder
                </div>
                <div className="size-md pb-md">
                  <strong>
                    <span className="pr-sm">
                      &#x2022;&#x2022;&#x2022;&#x2022;
                    </span>
                    <span id="carddigits_mock">0000</span>
                  </strong>
                </div>
                <div className="flex-between flex-vertical-center">
                  <strong className="size-md">
                    <span id="mm_mock">00</span>/<span id="yy_mock">01</span>
                  </strong>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                    />
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                    />
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#1565C0"
                      d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                    />
                    <path
                      fill="#FFF"
                      d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                    />
                    <path
                      fill="#FFC107"
                      d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <ul className="purchase-props">
              <li className="flex-between">
                <span>Company</span>
                <strong>Apple</strong>
              </li>
              <li className="flex-between">
                <span>Order number</span>
                <strong>429252965</strong>
              </li>
              <li className="flex-between">
                <span>Product</span>
                <strong>MacBook Air</strong>
              </li>
              <li className="flex-between">
                <span>VAT (20%)</span>
                <strong>$100.00</strong>
              </li>
            </ul>
          </div>
          <div className="separation-line"></div>
          <div className="total-section flex-between flex-vertical-center">
            <div className="flex-fill flex-vertical">
              <div className="total-label f-secondary-color">
                You have to Pay
              </div>
              <div>
                <strong>549</strong>
              </div>
            </div>
            <i className="ai-coin size-lg"></i>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Checkout;
