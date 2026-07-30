if ($response.body) {
  try {
    let body = JSON.parse($response.body);

    // Внедряем флаги подписки
    if (body.user) {
      body.user.is_pro = true;
      body.user.pro = true;
      body.user.has_pro = true;
      body.user.status = "pro";
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
