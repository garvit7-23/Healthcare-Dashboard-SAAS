export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
  condition: string;
  status: "Active" | "Recovered" | "Critical";
}