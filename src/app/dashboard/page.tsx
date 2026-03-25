import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { PatientsChart } from "@/components/ui/chart";
import { CountUp } from "@/components/ui/count-up";

export default function Home() {
  return (
    <AppLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Dashboard</h1>
        <p className="text-sm text-muted">
          Overview of your healthcare system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
          <CardHeader>Total Patients</CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-text">
                <CountUp end={1245} duration={1200} />
            </p>
            <p className="text-xs text-muted mt-1">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>Active Cases</CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-text">
                <CountUp end={342} duration={1400} />
            </p>
            <p className="text-xs text-muted mt-1">
              Stable compared to last week
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>Appointments</CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-text">
                <CountUp end={89} duration={1600} />
            </p>
            <p className="text-xs text-muted mt-1">
              +5 new today
            </p>
          </CardContent>
        </Card>

      </div>
      <div className="mt-8">
         <Card>
           <CardHeader>Patient Growth</CardHeader>
             <CardContent>
               <PatientsChart />
             </CardContent>
          </Card>
        </div>

      {/* Secondary Section */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        
        {/* Activity Card */}
        <Card>
          <CardHeader>Recent Activity</CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-muted">
              <p>• New patient registered</p>
              <p>• Appointment scheduled</p>
              <p>• Report uploaded</p>
              <p>• Prescription updated</p>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>System Status</CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Server</span>
                <span className="text-success font-medium">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Database</span>
                <span className="text-success font-medium">Healthy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">API</span>
                <span className="text-danger font-medium">Slow</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </AppLayout>
  );
}