export const formatPrice = (price: number): string => {
  const decimal = price / 100

  return `$${decimal.toFixed(2)}`
}
