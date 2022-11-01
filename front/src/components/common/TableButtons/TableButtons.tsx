import { ButtonGroup } from "@blueprintjs/core";

import { wrapper } from "./buttons.module.scss";

import Create from "./Create";
import Update from "./Update";
import Remove from "./Remove";
import Duplicate from "./Duplicate";

interface Props {
  createForm?: JSX.Element;
  updateForm?: JSX.Element;
  removeForm?: JSX.Element;
  duplicateForm?: JSX.Element;
}

const TableButtons = ({
  createForm,
  updateForm,
  removeForm,
  duplicateForm,
}: Props) => {
  return (
    <ButtonGroup className={wrapper} minimal large>
      <Create>{createForm}</Create>
      <Update>{updateForm}</Update>
      <Remove>{removeForm}</Remove>
      <Duplicate>{duplicateForm}</Duplicate>
    </ButtonGroup>
  );
};

export default TableButtons;
