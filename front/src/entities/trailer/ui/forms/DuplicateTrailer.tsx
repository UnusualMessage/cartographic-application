import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui/forms/actions";

import { TrailersStore } from "../../../stores/entities";

interface Props {
  id?: string;
}

const DuplicateTrailer = ({ id }: Props) => {
  return <Duplicate name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(DuplicateTrailer);
