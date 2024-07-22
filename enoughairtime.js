function enoughAirtime(usage, airtime) {
  var callCost = 1.88;
  var dataCost = 12;
  var smsCost = 0.75;
  const usageArray = usage.split(",");
  let totalCost = 0;

  for (let i = 0; i < usageArray.length; i++) {
    switch (usageArray[i].trim()) {
      case "call":
        totalCost += callCost;
        break;
      case "data":
        totalCost += dataCost;
        break;
      case "sms":
        totalCost += smsCost;
        break;
      default:
        break;
    }
  }

  const remainingAirtime = airtime - totalCost;
  return "R" + (remainingAirtime >= 0 ? remainingAirtime.toFixed(2) : "0.00");
}
