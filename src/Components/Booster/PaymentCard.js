import React, { useContext } from "react";
import { UserOrderContext } from "../Booster Page/SelectionCard";
import Button from "../Button";

function PaymentCard() {
  const context = useContext(UserOrderContext);
  const payExtra = () => {
    context.extraPayment.get
      ? context.extraPayment.set(false)
      : context.extraPayment.set(true);
  };
  return (
    <div className="payment-card">
      <div className="payment-card-header">
        <p className="black">Checkout</p>
        <i class="fas fa-credit-card black"></i>
      </div>
      <div className="payment-card-body">
        <p className="white boosting-type">Solo Normal Boosting</p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            verticalAlign: "middle",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              verticalAlign: "middle",
            }}
          >
            <p
              className="red"
              style={{ fontSize: "1.3em", fontWeight: "medium" }}
            >
              From
            </p>
            <p className="white">{context.initialRank.get}</p>
          </div>
          <div className="red" style={{ fontSize: "4em" }}>
            -
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              verticalAlign: "middle",
            }}
          >
            <p
              className="red"
              style={{ fontSize: "1.3em", fontWeight: "medium" }}
            >
              To
            </p>
            <p className="white">{context.destinedRank.get}</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            verticalAlign: "middle",
            marginBottom: "1em",
          }}
        >
          <p className="red" style={{ fontSize: "2em", fontWeight: "medium" }}>
            Total
          </p>
          <p
            className="white"
            style={{ fontSize: "1.5em", fontWeight: "medium" }}
          >
            {context.extraPayment.get ? "250 Dollar" : "200 Dollar"}
          </p>
        </div>

        <div>
          <p
            className="red"
            style={{
              fontSize: "1.3em",
              fontWeight: "medium",
              marginBottom: "0.3em",
            }}
          >
            Extra perks you get
          </p>
          <p className="white">1. Choose your Roles & Champions</p>
          <p className="white">2. Choose your Summoner Spells</p>
          <p className="white">3. VPN + Encryption Protection</p>
          <p className="white">4. 100% goal achievement</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            verticalAlign: "middle",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <p
            className="red"
            style={{
              fontSize: "1.3em",
              fontWeight: "medium",
              marginBottom: "0.7em",
              marginTop: "0.7em",
              width: "250px",
            }}
          >
            Make it happen faster by paying 25% extra
          </p>
          <label class="switch">
            <input type="checkbox" onChange={payExtra} />
            <span class="slider round"></span>
          </label>
        </div>

        <Button name="Proceed to pay" />
      </div>
    </div>
  );
}

export default PaymentCard;
