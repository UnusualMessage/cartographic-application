import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui/forms/actions";

import { TrailersStore } from "../../../stores/entities";

interface Props {
  id?: string;
}

const RemoveTrailer = ({ id }: Props) => {
  return <Remove name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(RemoveTrailer);
