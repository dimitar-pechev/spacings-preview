const t = (a, e) => {
  switch (a) {
    case "month":
      return e("static-rate-month-label", {
        defaultValue: "month"
      });
    case "hour":
      return e("static-rate-hour-label", {
        defaultValue: "hour"
      });
    case "day":
      return e("static-rate-day-label", {
        defaultValue: "day"
      });
    case "week":
    default:
      return "";
  }
};
export {
  t as g
};
