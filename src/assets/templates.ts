export type Documents = "none" | "report" | "resume" | "proposal" | "letter";

export interface templateType {
  templateName: Documents;
  templateImageURL: string;
  description: string;
}

export const templates = [
  {
    templateName: "none",
    templateImageURL: "none_url",
    description: "내용 없음"
  },
  {
    templateName: "report",
    templateImageURL: "report_url",
    description: "보고서"
  },
  {
    templateName: "resume",
    templateImageURL: "resume_url",
    description: "이력서"
  },
  {
    templateName: "proposal",
    templateImageURL: "proposal_url",
    description: "서신"
  },
  {
    templateName: "letter",
    templateImageURL: "letter_url",
    description: "편지"
  },
];
