import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UsersIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline"

const stats = [
  {
    name: "Total Users",
    value: "2,543",
    icon: UsersIcon,
    description: "Active users this month",
  },
  {
    name: "Task Completion",
    value: "84.3%",
    icon: CheckCircleIcon,
    description: "Average completion rate",
  },
  {
    name: "Active Time",
    value: "2.4h",
    icon: ClockIcon,
    description: "Average daily usage",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* We'll add charts and more detailed analytics here later */}
    </div>
  )
} 