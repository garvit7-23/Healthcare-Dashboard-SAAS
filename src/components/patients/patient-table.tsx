import { Patient } from "@/types/patient";
import clsx from "clsx";

interface PatientTableProps {
  patients: Patient[];
}

const statusStyles = {
  Active: "bg-success/10 text-success",
  Recovered: "bg-primary/10 text-primary",
  Critical: "bg-danger/10 text-danger",
};

export const PatientTable = ({ patients }: PatientTableProps) => {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        
        {/* Header */}
        <thead className="bg-gray-50 text-muted">
          <tr>
            <th className="text-left px-4 py-3 font-medium">ID</th>
            <th className="text-left px-4 py-3 font-medium">Name</th>
            <th className="text-left px-4 py-3 font-medium">Age</th>
            <th className="text-left px-4 py-3 font-medium">Gender</th>
            <th className="text-left px-4 py-3 font-medium">Condition</th>
            <th className="text-left px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="border-t border-border hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 text-muted">{patient.id}</td>
              <td className="px-4 py-3 font-medium text-text">
                {patient.name}
              </td>
              <td className="px-4 py-3">{patient.age}</td>
              <td className="px-4 py-3">{patient.gender}</td>
              <td className="px-4 py-3">{patient.condition}</td>
              <td className="px-4 py-3">
                <span
                  className={clsx(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    statusStyles[patient.status]
                  )}
                >
                  {patient.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};