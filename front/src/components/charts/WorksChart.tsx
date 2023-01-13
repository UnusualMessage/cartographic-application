import { ResponsiveCalendar } from "@nivo/calendar";

const data = [
  {
    value: 4,
    day: "2022-06-01",
  },

  {
    value: 7,
    day: "2022-06-02",
  },

  {
    value: 1,
    day: "2022-06-03",
  },

  {
    value: 3,
    day: "2022-06-04",
  },

  {
    value: 5,
    day: "2022-06-05",
  },
];

const WorksChart = () => {
  return (
    <ResponsiveCalendar
      data={data}
      from="2022-06-01"
      to="2022-09-01"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};

export default WorksChart;
