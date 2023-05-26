export default function numberWithSpaces(n) {
	return new Intl.NumberFormat().format(n);
}
