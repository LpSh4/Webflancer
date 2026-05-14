import { CommissionRepository } from "./commission.repository";
import { asClass } from "awilix";
import { CommissionController } from "./commission.controller";
import { CommissionService } from "./commission.service";

export const CommissionContainer = {
  commissionRepo: asClass(CommissionRepository).scoped().classic(),
  commissionController: asClass(CommissionController).scoped().classic(),
  commissionService: asClass(CommissionService).scoped().classic(),
};
