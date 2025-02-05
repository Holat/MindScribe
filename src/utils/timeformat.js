export function formatDateTime(timestamp) {
  const dateObj = new Date(timestamp);

  const localDate = new Date(
    dateObj.getTime() - dateObj.getTimezoneOffset() * 60000
  );

  // Format date as "Month DD, YYYY"
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = localDate.toLocaleDateString("en-US", dateOptions);

  // Format time as "hh:mm AM/PM"
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = localDate.toLocaleTimeString("en-US", timeOptions);

  return { formattedDate, formattedTime };
}
