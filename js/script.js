$("#slider").slider({
  min: 0,
  max: 15,
  step: 1,
  value: 14,
  tooltip: 'show',
  handle: 'triangle',
})

$("#slider").on("slide", () => {
  let infoText = $("#indicatorInfoText");
  let dollars = $("#slider").slider("getValue");

  switch (dollars) {
    case 15:
    case '15': {
      $("#indicatorInfoText").text("Excellent! You have reached the goal!");
      break;
    }
    default: {
      $("#indicatorInfoText").text(`You need $${15 - dollars} more to reach your target.`);
      break;
    }

  }

  console.log(dollars)
})


