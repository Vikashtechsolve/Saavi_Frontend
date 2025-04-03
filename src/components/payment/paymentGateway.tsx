import React, { useState } from 'react';
import axios from 'axios';

// Define the shape of the form data
interface FormData {
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
  phone: string;
}

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    amount: '10',
    productinfo: 'Testing Product',
    firstname: 'Tester',
    email: 'tester@gmail.com',
    phone: '9876543210',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/initiate-payment', formData);
      console.log(response)
      const { payment_url } = response.data;
      console.log(payment_url);
    //   window.location.href = payment_url; // Redirect to Easebuzz payment page
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="amount" placeholder="Amount" onChange={handleChange} />
      <input type="text" name="productinfo" placeholder="Product Info" onChange={handleChange} />
      <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} /> */}
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
