// Logger function

// function log(severity, message, time) {
//   console.log("*".repeat(80));
//   console.log("Severity: ", severity);
//   console.log("Message: ", message);
//   console.log("Time: ", time);
// }

// 1. Severity: "high", Message:  "the payment failed", time:"19-7-2022 6:30:24pm"
// 2. Severity: "high", Message:  "No internet connection", time:"19-7-2022 6:35:24pm"
// 3. Severity: "low", Message:  "Could not login", time:"19-7-2022 7:30:24pm"
// 4. Severity: "high", Message:  "the payment failed", time:"19-7-2022 5:30:24pm"
// 5. Severity: "high", Message:  "the payment failed", time:"19-7-2022 8:30:24pm"

// log("High", "the payment failed", "19-7-2022 6:30:24pm");
// log("High", "No internet connection", "19-7-2022 6:35:24pm");
// log("Low", "Could not login", "19-7-2022 7:30:24pm");
// log("High", "the payment failed", "19-7-2022 5:30:24pm");
// log("High", "the payment failed", "19-7-2022 8:30:24pm");

function log(severity) {
  return function (message) {
    return function (time) {
      console.log("*".repeat(80));
      console.log("Severity: ", severity);
      console.log("Message: ", message);
      console.log("Time: ", time);
    };
  };
}

// log("High")("the payment failed")("19-7-2022 6:30:24pm");

// var high = log("High");

// high()("the payment failed")("19-7-2022 6:30:24pm");

var paymentFailed = log("High")("The payment failed");

paymentFailed("19-7-2022 6:30:24pm");
paymentFailed("19-7-2022 7:30:24pm");
paymentFailed("19-7-2022 8:30:24pm");
paymentFailed("19-7-2022 9:30:24pm");
