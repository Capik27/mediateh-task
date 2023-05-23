export default function decimalRound(number) {
	const integerPart = Math.floor(number);
	const decimalPart = number - integerPart;
	return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
}
