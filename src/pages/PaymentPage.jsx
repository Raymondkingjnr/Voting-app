import { useState } from "react";
import {
  FlutterWaveButton,
  closePaymentModal,
  useFlutterwave,
} from "flutterwave-react-v3";

function PaymentPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    No_votes: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const config = {
    public_key: "FLWPUBK_TEST-ef5fc016d7e2729f5bdbb40c86b2d638-X",
    tx_ref: Date.now(),
    amount: 50 * formData.No_votes,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formData.email,
      phone_number: formData.phoneNumber,
      name: formData.name,
    },

    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },

    subaccounts: [
      {
        // vendor A
        id: "RS_19164D4E4D96D5C3160767D35963614B",
        transaction_split_ratio: 2,
        transaction_charge_type: "flat",
        transaction_charge: 15,
      },
    ],
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <form>
        <div>
          <label> Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> name</label>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> No_votes</label>
          <input
            type="number"
            name="multiplier"
            value={formData.No_votes}
            onChange={handleChange}
          />
        </div>
      </form>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal();
            },
            onClose: () => {
              console.log("You close me ooo");
            },
          });
        }}
      >
        Testing FW Payment
      </button>
      {/* <FlutterWaveButton {...fwConfig} /> */}
    </div>
  );
}

export default PaymentPage;

// const fwConfig = {
//     ...config,
//     text: "Pay with Flutterwave!",
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {
//       console.log("You close me ooo");
//     },
//   };
