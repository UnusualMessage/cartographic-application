import { observer } from "mobx-react-lite";

import { TrailersStore } from "@entities/trailer/model";
import { Duplicate } from "@shared/ui/forms/actions";

interface Props {
  id?: string;
}

const DuplicateTrailer = ({ id }: Props) => {
  return <Duplicate name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(DuplicateTrailer);
