if ($response.body) {
  try {
    let body = JSON.parse($response.body);

    // Внедряем флаги подписки
    if (body.user) {
      body.user.can_buy_in_beta = true;
      body.global.pro_support_url = ""
    }
    if (body.global) {
      body.global.can_edit_settings = true;
    }

    $done({ body: JSON.stringify(body) });
  } catch (e) {
    $done({});
  }
} else {
  $done({});
}
