import { Card } from "@/components/ui/card";
import { Patient } from "@/types/patient";
import clsx from "clsx";

interface PatientCardProps {
  patient: Patient;
}

const statusStyles = {
  Active: "bg-success/10 text-success",
  Recovered: "bg-primary/10 text-primary",
  Critical: "bg-danger/10 text-danger",
};

export const PatientCard = ({ patient }: PatientCardProps) => {
  return (
    <Card className="hover:shadow-md hover:-translate-y-0.5 transition-all">
      
      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="font-semibold text-text">{patient.name}</h2>
          <p className="text-sm text-muted">ID: {patient.id}</p>
        </div>

        <span
          className={clsx(
            "text-xs px-2 py-1 rounded-full font-medium",
            statusStyles[patient.status]
          )}
        >
          {patient.status}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted">Age</span>
          <span className="text-text font-medium">{patient.age}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Gender</span>
          <span className="text-text font-medium">{patient.gender}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted">Condition</span>
          <span className="text-text font-medium">{patient.condition}</span>
        </div>
      </div>

    </Card>
  );
};