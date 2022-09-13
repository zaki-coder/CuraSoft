export function dateToTimeAgo(date) {
  const now = new Date(Date.now());
  const difftime = now.getTime() - date.getTime();
  const diffDate = new Date(difftime - 5.5 * 60 * 60 * 1000);
  const [sec, min, hr, day, month] = [
    diffDate.getSeconds(),
    diffDate.getMinutes(),
    diffDate.getHours(),
    diffDate.getDate() - 1,
    diffDate.getMonth(),
  ];
  const f = (property, end) => {

    return `${property} ${end}${property > 1 ? "n" : ""}`;
  };
  return month >= 1
    ? f(month, "Monate")
    : day >= 1
    ? f(day, "Tag")
    : hr >= 1
    ? f(hr, "Stunde")
    : min >= 1
    ? f(min, "Minute")
    : day >= 1
    ? f(sec, "Sekunde")
    : "";

  throw new Error("Date To time ago not implmented");
}
