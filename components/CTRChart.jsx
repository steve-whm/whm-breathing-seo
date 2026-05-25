import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { name: 'Current\n0.15%', clicks: 3280,   fill: '#e24b4a' },
  { name: '1% fix',          clicks: 21302,  fill: '#f5a623' },
  { name: '3% avg',          clicks: 63905,  fill: '#1e4d63' },
  { name: '5% strong',       clicks: 106508, fill: '#1a3d4f' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg text-xs">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      <p className="text-gray-600">{payload[0].value.toLocaleString()} clicks / quarter</p>
    </div>
  )
}

export default function CTRChart() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#c47d0a' }}>
        Desktop click opportunity at different CTR levels
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0ede8" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: 10, fill: '#6b7280' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8f6f2' }} />
          <Bar dataKey="clicks" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-400 text-center mt-2">Based on 2.13M desktop impressions / quarter</p>
    </div>
  )
}
