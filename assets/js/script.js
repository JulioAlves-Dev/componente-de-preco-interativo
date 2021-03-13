let priceProduct = 8,
  pageViews = "10K";

const QS = (e) => document.querySelector(e),
  inputRange = QS("main #preco"),
  valueProduct = QS("main .one-part strong"),
  valuePageViews = QS("main .one-part .qt-views"),
  switchCheck = QS("main .one-part .switch input[type='checkbox']"),
  buttonStart = QS("main .two-part button");

buttonStart.addEventListener("click", () => {
  alert("Obrigado");
});

inputRange.addEventListener("input", valueRange);
switchCheck.addEventListener("input", valueRange);

function updateValue() {
  valueProduct.innerText = priceProduct.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  valuePageViews.innerText = `${pageViews} PAGEVIEWS`;
}
updateValue();

function valueRange() {
  const valueRange = inputRange.value;
  switch (valueRange) {
    case "0":
      priceProduct = 8;
      pageViews = "10K";
      break;
    case "25":
      priceProduct = 12;
      pageViews = "50K";
      break;
    case "50":
      priceProduct = 16;
      pageViews = "100K";
      break;
    case "75":
      priceProduct = 24;
      pageViews = "500K";
      break;
    case "100":
      priceProduct = 36;
      pageViews = "1M";
      break;
  }
  if (switchCheck.checked) {
    priceProduct *= 0.75;
  }
  updateValue();
}
