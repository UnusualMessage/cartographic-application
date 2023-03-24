import React from "react";

import { printTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";
import { GlobalWrapper } from "@shared/ui";
import { Schema } from "@widgets/index";

const PrintSchema = () => {
  return (
    <GlobalWrapper>
      <SchemaTemplateContext.Provider value={printTemplate}>
        <Schema toPrint />
      </SchemaTemplateContext.Provider>
    </GlobalWrapper>
  );
};

export default PrintSchema;
