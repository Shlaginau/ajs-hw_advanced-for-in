function orderByProps(obj, order) {
  const result = [];
  const usedKeys = {};

  order.forEach((key) => {
    if (key in obj) {
      result.push({ key, value: obj[key] });
      usedKeys[key] = true;
    }
  });

  const objCopy = { ...obj };

  Object.keys(objCopy).sort().forEach((key) => {
    if (!usedKeys[key]) {
      result.push({ key, value: objCopy[key] });
    }
  });

  return result;
}

export default orderByProps;
