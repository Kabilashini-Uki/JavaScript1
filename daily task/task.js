function maskCard(cardNumber) {
  // Split the number by dashes
  const parts = cardNumber.split("-");
  // Replace all parts except the last with '****'
  const masked = parts.map((part, index) => (index < parts.length - 1 ? "****" : part));
  return masked.join("-");
}

const card = "5467-7467-8263-1234";
console.log(maskCard(card));




