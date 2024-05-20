# enhanced-checkout-page

Generate a checkout page enhancement of this code: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Checkout Page</title>
<style>
  body { font-family: Arial, sans-serif; padding: 20px; }
  label, select, input { display: block; width: 300px; margin-bottom: 10px; }
  .modal { display: none; position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); }
  .modal-content { background-color: #fff; margin: 15% auto; padding: 20px; width: 300px; }
</style>
</head>
<body>
<form id="checkoutForm">
  <label>Name:</label>
  <input type="text" id="name" value="Marc Smith">

  <label>Email:</label>
  <input type="email" id="email" value="marcSmith@yahoo.com">

  <label>Amount:</label>
  <input type="text" id="amount" value="2000">

  <label>Mobile Number:</label>
  <input type="tel" id="mobilenumber" value="0909333322">

  <label>Address:</label>
  <input type="text" id="address" value="Manila ph">

  <label>Remarks:</label>
  <input type="text" id="remarks" value="remarks">

  <label>Payment Method:</label>
  <select id="pay_method">
    <option value="pm-gcash">Gcash</option>
    <option value="pm-paypal">PayPal</option>
    <option value="pm-banktransfer">Bank Transfer</option>
  </select>

  <button type="button" onclick="submitPayment()">Pay</button>
</form>

<div id="paymentModal" class="modal">
  <div class="modal-content">
    <p>Redirecting to payment...</p>
  </div>
</div>

<script>
function submitPayment() {
  var modal = document.getElementById("paymentModal");
  modal.style.display = "block";
  setTimeout(function() {
    window.location.href = "https://test-sources.paymongo.com/sources?id=src_LivTh3piFahXazhRjRAF7nRk";
  }, 3000); // Redirect after 3 seconds
}
</script>
</body>
</html>

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/enhanced-checkout-page.git
cd enhanced-checkout-page
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
