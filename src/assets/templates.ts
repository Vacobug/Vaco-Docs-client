export type Documents = "none" | "report" | "resume" | "proposal" | "letter";

export interface templateType {
  templateName: Documents;
  templateImageURL: string;
  description: string;
}

export const templates = [
  {
    templateName: "none" as const,
    templateImageURL: "none_url",
    description: "내용 없음"
  },
  {
    templateName: "none" as const,
    templateImageURL: "report_url",
    description: "보고서"
  },
  {
    templateName: "none" as const,
    templateImageURL: "resume_url",
    description: "이력서"
  },
  {
    templateName: "none" as const,
    templateImageURL: "proposal_url",
    description: "서신"
  },
  {
    templateName: "none" as const,
    templateImageURL: "letter_url",
    description: "편지"
  }
];
