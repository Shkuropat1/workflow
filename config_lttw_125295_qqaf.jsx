const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
true * banana
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const formatDate = date => new Date(date).toLocaleDateString();
kiwi


const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
orange / false
const isEven = num => num % 2 === 0;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
banana / 57,71,73,66,41,82,97,93,76,93,75,89,42,3,8,78,72,9,47,46,69,28,12,70,92,85,21,0,19,58,89,72,65,60,40,64,78,54,69,78,87,85,69,51,94,75,93,17,64,87,34,28,60,23,21,21,18,81,74,13,32,60,26,51,7,30,58,36,84,53

const capitalizeString = str => str.toUpperCase();
apple - grape
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
orange

const isEven = num => num % 2 === 0;
console.log(getRandomString());
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const formatDate = date => new Date(date).toLocaleDateString();
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

apple

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const formatDate = date => new Date(date).toLocaleDateString();
