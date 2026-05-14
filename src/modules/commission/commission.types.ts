import { CommissionType } from "../../entities/commission.entity";

export interface CreateCommissionData {
  clientId: string;
  type: CommissionType;
  title: string;
  description: string;
  functionality: string;
  designLink: string;
  budgetMin: number;
  budgetMax?: number | undefined;
  deadLine?: Date | undefined;
  references: string[];
}

export interface EditCommissionData {
  id: string;
  userId: string;
  type?: CommissionType;
  title?: string;
  description?: string;
  functionality?: string;
  designLink?: string;
  budgetMin?: number;
  budgetMax?: number | undefined;
  deadLine?: Date | undefined;
  references?: string[];
}
