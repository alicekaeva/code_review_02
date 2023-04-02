function sum(check) {
  const regex = /[a-zA-Z]+/g;
  const checkWithoutNames = check.replace(regex, " ");
  const prices = checkWithoutNames.trim().split(" ");
  let validPrices = [];
  for (const price of prices) {
    const isValid = isPriceValid(price);
    if (!isValid) {
      return `Ошибка в чеке. Товар с ценой ${price}`;
    } else {
      validPrices.push(convertToValidPrice(price));
    }
  }
  validPrices = validPrices.map((num) => parseFloat(num));
  console.log(validPrices);
  return validPrices.reduce((acc, value) => (acc += parseFloat(value)));
}

function isPriceValid(price) {
  if (price == "0") {
    return false;
  }

  const lastDotIndex = price.lastIndexOf(".");
  let rubles = "";
  let kopecks = "";
  if (lastDotIndex == -1) {
    if (/^0\d*/.test(price)) {
      return false;
    }

    if (!(parseInt(price) >= 1 && parseInt(price) <= 999)) {
      return false;
    }
  } else {
    rubles = price.slice(0, lastDotIndex);
    kopecks = price.slice(lastDotIndex + 1);

    if (rubles.length == 0) {
      return false;
    }

    if (/^0[0-9\.]+/.test(rubles)) {
      return false;
    }

    if (
      kopecks.length == 3 &&
      /^\d{1,3}(\.\d{3})*$/.test(price) &&
      rubles[0] != 0
    ) {
      return true;
    }

    if (!/^\d{2}$/.test(kopecks)) {
      return false;
    }

    if (kopecks == "00") {
      return false;
    }

    if (rubles.length > 3) {
      return /^\d{1,3}(\.\d{3})*$/.test(rubles);
    }
  }

  return true;
}

function convertToValidPrice(price) {
  let rubles = price.slice(0, -3);
  const kopecks = price.slice(-3);
  if (/^\.\d{2}$/.test(kopecks)) {
    rubles = rubles.replace(".", "");
    price = rubles.concat("", kopecks);
  } else {
    price = price.replace(".", "");
  }
  return price;
}
