export default interface Ticket {
  id: number;
  title: string;
  description: string;
  principalImage: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in_progress" | "resolved";
  createdBy: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
  images: string[];
}
