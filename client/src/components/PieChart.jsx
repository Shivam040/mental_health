// src/PieChart.jsx
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";

const PieChart = ({ dummyData }) => {
  const theme = useTheme();

  /*const dummyData = [
    { id: "Anxiety", label: "Anxiety", value: 500 },
    { id: "Depression", label: "Depression", value: 300 },
    { id: "Bipolar Disorder", label: "Bipolar Disorder", value: 200 },
    { id: "Normal", label: "Normal", value: 150 },
    { id: "okay", label: "okay", value: 100 },
  ];*/

  return (
    <ResponsivePie
      data={dummyData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#000000"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 105,
          itemWidth: 10,
          itemHeight: 18,
          itemTextColor: "#000000",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;