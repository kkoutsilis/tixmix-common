import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderMailEvent {
  subject: Subjects.OrderMail;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    userEmail: string,
    ticket: {
      id: string;
      price: number;
      title: string;
    };
  };
}
