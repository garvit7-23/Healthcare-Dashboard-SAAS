"use client";

import { useState } from "react";
import { AppLayout } from "@/components/layout/app-layout";
import { ViewToggle } from "@/components/patients/view-toggle";
import { patients } from "@/data/patients";
import { PatientCard } from "@/components/patients/patient-card";
import { PatientTable } from "@/components/patients/patient-table";

type ViewMode = "grid" | "list";

export default function PatientsPage() {
  const [view, setView] = useState<ViewMode>("grid");

  return (
    <AppLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text">Patients</h1>
          <p className="text-sm text-muted">
            Manage and monitor patient records
          </p>
        </div>

        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* Grid View */}
      {view === "grid" && (
        <div className="grid grid-cols-3 gap-6">
          {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      )}

      {/* List View (next step) */}
      {view === "list" && (
       <PatientTable patients={patients} />
       )}
    </AppLayout>
  );
}