import { observer } from "mobx-react-lite";

import { Duplicate } from "@shared/ui";

import { TrailersStore } from "../../model";

interface Props {
  id?: string;
}

const DuplicateTrailer = ({ id }: Props) => {
  return <Duplicate name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(DuplicateTrailer);
