export type Documents = "none" | "report" | "resume" | "proposal" | "letter";

export interface templateType {
  templateName: Documents;
  templateImageURL: string;
}

export const templates = [
  {
    templateName: "none",
    templateImageURL: "none_url"
  },
  {
    templateName: "report",
    templateImageURL: "report_url"
  },
  {
    templateName: "resume",
    templateImageURL: "resume_url"
  },
  {
    templateName: "proposal",
    templateImageURL: "proposal_url"
  },
  {
    templateName: "letter",
    templateImageURL: "letter_url"
  },
];
