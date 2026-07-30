const url = $request.url;
const status = $response.status;
const body = $response.body;

console.log(`\n=== REVENUECAT LOG ===`);
console.log(`URL: ${url}`);
console.log(`Status: ${status}`);
console.log(`Body: ${body}`);
console.log(`======================\n`);

$done({});
