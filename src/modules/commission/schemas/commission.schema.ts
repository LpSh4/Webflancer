import { CommissionType } from "../../../entities/commission.entity";

export const CreateCommissionSchema = {
  body: {
    type: "object",
    required: ["type", "title", "budgetMin"],
    properties: {
      type: {
        type: "string",
        enum: Object.values(CommissionType),
      },
      title: { type: "string" },
      description: { type: "string", default: "" },
      functionality: { type: "string", default: "" },
      designLink: {
        type: "string",
        pattern: "^(https?://.*)?$",
        default: "",
      },
      budgetMin: { type: "number" },
      budgetMax: { type: "number", nullable: true },
      deadLine: {
        type: "string",
        format: "date-time",
      },
      references: {
        type: "array",
        items: {
          type: "string",
          format: "uri",
        },
      },
    },
  },
};

export const EditCommissionSchema = {
  params: {
    type: "object",
    properties: {
      id: { type: "string", format: "uuid" },
    },
    required: ["id"],
  },
  body: {
    type: "object",
    additionalProperties: false,
    properties: {
      type: {
        type: "string",
        enum: Object.values(CommissionType),
      },
      title: { type: "string" },
      description: { type: "string", default: "" },
      functionality: { type: "string", default: "" },
      designLink: {
        type: "string",
        pattern: "^(https?://.*)?$",
        default: "",
      },
      budgetMin: { type: "number" },
      budgetMax: { type: "number" },
      deadLine: {
        type: "string",
        format: "date-time",
      },
      references: {
        type: "array",
        items: {
          type: "string",
          format: "uri",
        },
      },
    },
  },
};

export const getByIdSchema = {
  params: {
    type: "object",
    properties: {
      targetId: { type: "string", format: "uuid" }, // Enforces UUID format
    },
    required: ["targetId"],
  },
};
