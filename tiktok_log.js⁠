// TikTok Feed Logger
let url = $request.url;
let body = $response.body;

console.log("=== TIKTOK FEED DETECTED ===");
console.log("URL: " + url);

if (body) {
    try {
        let obj = JSON.parse(body);
        console.log("JSON PARSED SUCCESSFULLY!");
        
        // Логируем ключи верхнего уровня
        console.log("Root keys: " + Object.keys(obj).join(", "));
        
        // Если есть aweme_list, проверяем первый элемент
        if (obj.aweme_list && obj.aweme_list.length > 0) {
            console.log("Aweme count: " + obj.aweme_list.length);
            let sample = obj.aweme_list[0];
            
            // Выводим только важные ключи для определения рекламы
            let adKeys = {};
            for (let k in sample) {
                if (k.includes("ad") || k.includes("is_") || k.includes("type") || k.includes("commercial")) {
                    adKeys[k] = sample[k];
                }
            }
            console.log("Sample Item Ad Flags: " + JSON.stringify(adKeys));
        } else {
            console.log("No aweme_list in JSON or structure is different");
        }
    } catch (e) {
        console.log("JSON Parse Error (Response might be Protobuf/Gzip): " + e.message);
    }
} else {
    console.log("Body is empty");
}

$done({ body });
