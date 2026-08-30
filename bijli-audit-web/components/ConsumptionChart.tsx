"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const mockData = [
  { month: "Mar", units: 165 },
  { month: "Apr", units: 178 },
  { month: "May", units: 190 },
  { month: "Jun", units: 210 },
  { month: "Jul", units: 195 },
  { month: "Aug", units: 182 },
];

export default function ConsumptionChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-[#1f3a6e] text-lg">Consumption Trend</h3>
          <p className="text-xs text-slate-500 font-medium">Monthly usage over the last 6 months</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
          Target Limit: 200 Units
        </span>
      </div>

      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1f3a6e" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#1f3a6e" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderColor: "#e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                color: "#0f172a",
                padding: "10px 14px",
              }}
              formatter={(value: any) => [`${value} Units`, "Usage"]}
            />
            {/* 200 Units Safety Line */}
            <ReferenceLine
              y={200}
              stroke="#ef4444"
              strokeDasharray="4 4"
              label={{ value: "200 Unit Limit", fill: "#ef4444", fontSize: 11, position: "top" }}
            />
            <Area
              type="monotone"
              dataKey="units"
              stroke="#1f3a6e"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorUnits)"
              dot={{ fill: "#f59e0b", r: 5, stroke: "#1f3a6e", strokeWidth: 2 }}
              activeDot={{ r: 7, fill: "#f59e0b" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}