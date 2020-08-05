import React, { useContext } from "react";
import { UserOrderContext } from "../Booster Page/SelectionCard";
import Button from "../Button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function PaymentCard() {
  const context = useContext(UserOrderContext);
  const payExtra = () => {
    context.extraPayment.get
      ? context.extraPayment.set(false)
      : context.extraPayment.set(true);
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);
    console.log(cardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
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
          <p className="white">3. VPN + Encryption Protection</p>
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
        <div className="custom-designed-stripe-form">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <Button name="Proceed to pay" click={handleSubmit} />
      </div>
    </div>
  );
}

export default PaymentCard;
