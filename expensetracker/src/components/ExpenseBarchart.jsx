import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExpenseBarChart = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const category = acc.find((item) => item.name === expense.category);
    if (category) {
      category.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width={600} height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
        barSize={20}
      >
        <XAxis type="number" tick={{ fill: "transparent" }} hide />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: "#000000", fontSize: 20 }}
          axisLine={false}
          tickLine={false}
        />

        <Bar dataKey="value" fill="#8784D2" radius={[0, 20, 20, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseBarChart;
