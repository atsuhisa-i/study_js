/**
 * 税込の値段を返す関数
 * @param price 価格
 * @param tax 税率
 */

function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

const result1 = calcFunction(100);
console.log(result1);

const result2 = calcFunction(100, 0.1);
console.log(result2);