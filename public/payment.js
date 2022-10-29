const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
e.preventDefault();

let handler = PaystackPop.setup({
publicKey: 'pk_live_bbfd8c7857e59a7e4b7fd2340421d8f9b41dd6f2',
key: 'pk_live_bbfd8c7857e59a7e4b7fd2340421d8f9b41dd6f2', // Replace with your public key
email: document.getElementById("email-address").value,
amount: document.getElementById("amount").value * 100,
currency: "ZAR",
ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
// label: "Optional string that replaces customer email"
onClose: function(){
alert('Window closed.');
},
callback: function(response){
let message = 'Payment complete! Reference: ' + response.reference;
alert(message);
}
});

handler.openIframe();
}
 