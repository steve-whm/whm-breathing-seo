import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Mobile',  value: 71.4, clicks: 8700,  ctr: '2.02%', color: '#1a3d4f' },
  { name: 'Desktop', value: 26.9, clicks: 3280,  ctr: '0.15%', color: '#e24b4a' },
  { name: 'Tablet',  value: 1.7,  clicks: 205,   ctr: '2.37%', color: '#f5a623' },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow text-xs">
      <p className="font-semibold mb-1">{d.name}</p>
      <p>Share: {d.value}%</p>
      <p>Clicks: {d.clicks.toLocaleString()}</p>
      <p className={d.name === 'Desktop' ? 'text-red-600 font-bold' : ''}>CTR: {d.ctr}</p>
    </div>
  )
}

export default function DeviceChart() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: '#c47d0a' }}>
        Traffic by device — click share
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80}
              dataKey="value" paddingAngle={2}>
              {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 w-full">
          {data.map((d, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                <span className="text-sm font-medium text-gray-700">{d.name}</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-gray-500">{d.value}%</span>
                <span className={`font-bold ${d.name === 'Desktop' ? 'text-red-600' : 'text-green-700'}`}>
                  {d.ctr} CTR
                </span>
              </div>
            </div>
          ))}
          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs text-red-700 font-semibold">13× gap between desktop and mobile CTR</p>
          </div>
        </div>
      </div>
    </div>
  )
}
