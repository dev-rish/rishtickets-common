import { Subjects } from "./subjects";

export interface OrderCompletedEvent {
  subject: Subjects.OrderCompleted;

  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
