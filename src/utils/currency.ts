
// Currency conversion utility
// Using a fixed exchange rate for simplicity (1 USD = 83 INR approximately)
export const USD_TO_INR_RATE = 83;

export const convertToINR = (usdAmount: number): number => {
  return usdAmount * USD_TO_INR_RATE;
};

export const formatCurrency = (amount: number, currency: 'USD' | 'INR' = 'INR'): string => {
  if (currency === 'USD') {
    return `$${amount.toFixed(2)}`;
  }
  return `₹${amount.toFixed(2)}`;
};
