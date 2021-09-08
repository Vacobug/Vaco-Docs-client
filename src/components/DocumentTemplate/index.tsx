import React from "react";
import styled from "styled-components";

import { templateType } from "../../assets/templates";

interface DocumentTemplateProps {
  template: templateType;
}

function DocumentTemplate({ template }: DocumentTemplateProps) {
  const { templateName, templateImageURL } = template;

  return (
    <DocumentTemplateWrapperDiv>
      <img src={templateImageURL} alt={templateName} />
      <p>{templateName}</p>
    </DocumentTemplateWrapperDiv>
  );
}

const DocumentTemplateWrapperDiv = styled.div`
  min-width: 20%;
  height: 85%;
`;

export default DocumentTemplate;
