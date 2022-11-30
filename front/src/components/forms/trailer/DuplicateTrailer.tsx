import { observer } from "mobx-react-lite";

import { TrailersStore } from "../../../stores/entities";
import { Duplicate } from "../../auxiliary/forms/actions";

interface Props {
  id?: string;
}

const DuplicateTrailer = ({ id }: Props) => {
  return <Duplicate name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(DuplicateTrailer);
