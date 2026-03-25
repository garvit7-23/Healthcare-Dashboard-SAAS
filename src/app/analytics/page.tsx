import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { PatientsChart } from "@/components/ui/chart";
import { CountUp } from "@/components/ui/count-up";


export default function AnalyticsPage() {
  return (
    <AppLayout>
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Analytics</h1>
        <p className="text-sm text-muted">
          Insights and trends of patient data
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader>Total Patients</CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
                <CountUp end={1245} duration={1200} />
            </p>
            <p className="text-xs text-muted mt-1">+12% growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Recovery Rate</CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
                <CountUp end={78} duration={1200} />%
                </p>
            <p className="text-xs text-muted mt-1">Improving</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Critical Cases</CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-danger">
                <CountUp end={12} duration={1200} />
            </p>
            <p className="text-xs text-muted mt-1">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        
        {/* Growth Chart */}
        <Card>
          <CardHeader>Patient Growth</CardHeader>
          <CardContent>
            <PatientsChart />
          </CardContent>
        </Card>

        {/* Dummy Distribution */}
        <Card>
          <CardHeader>Condition Distribution</CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Diabetes</span>
                <span className="font-medium">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Hypertension</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Cardiac</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Other</span>
                <span className="font-medium">20%</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </AppLayout>
  );
}