"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", patients: 400 },
  { name: "Feb", patients: 600 },
  { name: "Mar", patients: 800 },
  { name: "Apr", patients: 700 },
  { name: "May", patients: 900 },
  { name: "Jun", patients: 1100 },
];

export const PatientsChart = () => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="patients"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};