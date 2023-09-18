export default function cauculateJobTimeLeft(date1) {
  let today = new Date();
  let date2 = new Date(date1);
  let timeLeft = Math.floor(
    (Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) -
      Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) /
      (1000 * 60 * 60 * 24)
  );
  return timeLeft;
}
