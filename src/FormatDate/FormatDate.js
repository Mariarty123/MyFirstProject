const monthArray = [
  { key: 0, ruMonth: "январь", enMonth: "Jan" },
  { key: 1, ruMonth: "февраль", enMonth: "Feb" },
  { key: 2, ruMonth: "март", enMonth: "Mar" },
  { key: 3, ruMonth: "апрель", enMonth: "Apr" },
  { key: 4, ruMonth: "май", enMonth: "May" },
  { key: 5, ruMonth: "июнь", enMonth: "Jun" },
  { key: 6, ruMonth: "июль", enMonth: "Jul" },
  { key: 7, ruMonth: "август", enMonth: "Aug" },
  { key: 8, ruMonth: "сентябрь", enMonth: "Sep" },
  { key: 9, ruMonth: "октябрь", enMonth: "Oct" },
  { key: 10, ruMonth: "ноябрь", enMonth: "Nov" },
  { key: 11, ruMonth: "декабрь", enMonth: "Dec" },
];

const FormatDate = (props) => {
  const month = props.taskDate.toLocaleString("en-EN", { month: "short" });
  const year = props.taskDate.getFullYear();
  const day = props.taskDate.toLocaleString("ru-RU", { day: "2-digit" });
  console.log(month, day, year);
  console.log(props.taskDate);
  return (
    <>
      {month}
      {day},{year}
    </>
  );
};
export default FormatDate;
