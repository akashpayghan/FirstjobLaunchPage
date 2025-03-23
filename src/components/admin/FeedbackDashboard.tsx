
import React, { useEffect, useState } from 'react';
import { getFeedbackData } from '@/api/subscriberApi';
import { toast } from 'sonner';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

interface FeedbackItem {
  _id: string;
  option: string;
  suggestion: string;
  createdAt: string;
}

interface FeedbackDashboardProps {
  token: string;
}

interface ChartData {
  name: string;
  value: number;
}

const FeedbackDashboard: React.FC<FeedbackDashboardProps> = ({ token }) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getFeedbackData(token);
      if (response.success && response.data) {
        setFeedbackData(response.data);
      } else {
        toast.error(response.message || 'Failed to fetch feedback data');
      }
    } catch (error) {
      toast.error('An error occurred while fetching data');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  // Prepare chart data from feedback
  const prepareChartData = (): ChartData[] => {
    const optionCounts: Record<string, number> = {};
    
    feedbackData.forEach(item => {
      optionCounts[item.option] = (optionCounts[item.option] || 0) + 1;
    });
    
    return Object.entries(optionCounts).map(([name, value]) => ({ name, value }));
  };

  const chartData = prepareChartData();
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const chartConfig = {
    primary: { theme: { light: '#3B82F6', dark: '#60A5FA' } },
    secondary: { theme: { light: '#10B981', dark: '#34D399' } },
    tertiary: { theme: { light: '#F59E0B', dark: '#FBBF24' } },
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Feedback Dashboard</h1>
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Refresh Data
        </button>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading feedback data...</div>
      ) : (
        <>
          {feedbackData.length === 0 ? (
            <div className="text-center py-8">No feedback data available.</div>
          ) : (
            <>
              <div className="mb-8 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Feedback Overview</h2>
                <div className="h-80">
                  <ChartContainer config={chartConfig}>
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ChartContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Detailed Feedback</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Option
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Suggestion
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {feedbackData.map((item) => (
                        <tr key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.option}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {item.suggestion || 'No suggestion provided'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FeedbackDashboard;
