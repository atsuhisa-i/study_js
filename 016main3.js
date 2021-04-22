const myValue = '100';

switch (myValue){
  case 100:
    //switchの式と値は厳密な等価（===）で比較されるため、
    //1句目は実行されない。
    console.log('数字の100です');
    break;
  default:
    console.log('数字の100ではありません');
    break;
}