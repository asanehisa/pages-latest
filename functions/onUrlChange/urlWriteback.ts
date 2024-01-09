import { urlWritebackPlugin } from "https://deno.land/x/yextpages@plugins@1.0.0-beta.3/mod.ts";

const pageUrlCustomField = "c_pagesUrl"; // Need to update to api name of CF storing prod URL for entities
const API_KEY = "e28da53848a6e8ee815bd443a4eda720";

const main = urlWriteback({
  field: pageUrlCustomField,
  apiKey: API_KEY,
  environment: "prod",
  v: "20240108",
});

function urlWriteback(config) {
  function onUrlChange(event) {
    if (!(event.entityId && event.locale && event.url)) {
      console.log("Invalid event", event);
      return null;
    }
    let field = config.field;
    if (config.featureToFieldMap && config.featureToFieldMap[event.feature]) {
      field = config.featureToFieldMap[event.feature];
    }
    const update = {
      [field]: `https://${event.url}`,
    };
    return updateEntity(event.entityId, event.locale, update, config.apiKey, {
      v: config.v,
      env: config.environment,
    });
  }
  return onUrlChange;
}

function buildApiUrl(base, path, params) {
  const result = new URL(path, base);
  for (const k in params) {
    result.searchParams.append(k, params[k]);
  }
  return result.toString();
}
async function updateEntity(id, locale, body, apiKey, options) {
  const URL_BASE = "https://api.yext.com/v2/accounts/me/";
  const url = buildApiUrl(URL_BASE, `entityprofiles/${id}/${locale}`, {
    api_key: apiKey,
    v: options?.v || "20220903",
  });
  const req = new Request(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  const response = await fetch(req);
  if (response.status < 200 || response.status >= 300) {
    const responseBody2 = await response.json();
    throw responseBody2.meta.errors[0].message;
  }
  const responseBody = await response.json();
  console.log("Updated entity", responseBody.response);
  return responseBody.response;
}

export default main;
