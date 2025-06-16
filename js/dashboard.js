window.onload = function () {
  const planElement = document.getElementById("plan-status");
  const startDate = new Date(planElement.dataset.startDate);
  const today = new Date();
  const difference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const remaining = 30 - difference;

  if (remaining > 0) {
    planElement.textContent = `✅ Your 30-day plan: ${remaining} days remaining`;
    planElement.className = "status-active";
  } else {
    planElement.textContent = `❌ Your plan has expired. Please recharge now.`;
    planElement.className = "status-expired";
  }
};


// Add event listener for the recharge button
// document.getElementById("recharge-button").addEventListener("click", function () {
//   alert("Recharge functionality is not implemented yet.");
// });                                                         