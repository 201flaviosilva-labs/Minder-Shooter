// JS Utils
export const randomColor = () => "#" + (Math.random() * 0xFFFFFF << 0).toString(16);

export const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1) + min);

// Radians and Degrees
export const radiansToDegrees = r => r * (180 / Math.PI);
export const degreesToRadians = d => d * (Math.PI / 180);

// Numbers
export const sortAscending = arr => arr.sort((a, b) => a - b);
export const sortDescending = arr => arr.sort((a, b) => b - a);
export const formateScore = time => Number((time * 0.001).toFixed(0)); // Formate Score by time

// Sort Objects by property
export const sortAscendingObj = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);
export const sortDescendingObj = (arr, prop) => arr.sort((a, b) => b[prop] - a[prop]);

// Date
export const getDateFormatted = () => {
	const date = new Date();
	return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}
