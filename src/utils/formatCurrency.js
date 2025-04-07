// Define the currency formatting function
export default function formatCurrency(number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
