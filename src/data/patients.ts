import { Patient } from "@/types/patient";

export const patients: Patient[] = [
  {
    id: "P001",
    name: "John Doe",
    age: 45,
    gender: "Male",
    condition: "Diabetes",
    status: "Active",
  },
  {
    id: "P002",
    name: "Sarah Smith",
    age: 32,
    gender: "Female",
    condition: "Hypertension",
    status: "Recovered",
  },
  {
    id: "P003",
    name: "Michael Lee",
    age: 60,
    gender: "Male",
    condition: "Cardiac Arrest",
    status: "Critical",
  },
];