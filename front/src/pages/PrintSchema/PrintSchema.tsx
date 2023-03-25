import React from "react";

import { printTemplate } from "@shared/assets";
import { SchemaTemplateContext } from "@shared/constants";
import { Schema } from "@widgets/index";
import { Body } from "@widgets/wrappers";

const PrintSchema = () => {
  return (
    <Body>
      <SchemaTemplateContext.Provider value={printTemplate}>
        <Schema toPrint />
      </SchemaTemplateContext.Provider>
    </Body>
  );
};

export default PrintSchema;
