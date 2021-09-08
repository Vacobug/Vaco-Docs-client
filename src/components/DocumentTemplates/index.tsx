import React from "react";
import styled from "styled-components";

import DocumentTemplate from "../DocumentTemplate";

import { templateType } from "../../assets/templates";

interface DocumentTemplatesProps {
  templates: templateType[];
}

function DocumentTemplates({ templates }: DocumentTemplatesProps) {
  const templateComponents = templates.map((template) => <DocumentTemplate template={template} />);

  return (
    <DocumentTemplatesWrapperArticle>
      {templateComponents}
    </DocumentTemplatesWrapperArticle>
  );
}

const DocumentTemplatesWrapperArticle = styled.article`
  width: 100%;
  height: 30%;
  background-color: "#F0F3F4";
`;

export default DocumentTemplates;
