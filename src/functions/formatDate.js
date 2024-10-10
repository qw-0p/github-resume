export function formatDate(isoDate) {
	console.log(isoDate);
	
	const date = new Date(isoDate);
	const day = String(date.getUTCDate()).padStart(2, '0');
	const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
	const year = date.getUTCFullYear();

	return `${day}-${month}-${year}`;
}


