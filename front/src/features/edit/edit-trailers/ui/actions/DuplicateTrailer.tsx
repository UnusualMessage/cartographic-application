import { observer } from "mobx-react-lite";

import { TrailersStore } from "@entities/business";
import { Duplicate } from "@shared/ui";

interface Props {
  id?: string;
}

const DuplicateTrailer = ({ id }: Props) => {
  return <Duplicate name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(DuplicateTrailer);
