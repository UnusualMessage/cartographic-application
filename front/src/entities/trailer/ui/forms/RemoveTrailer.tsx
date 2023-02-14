import { observer } from "mobx-react-lite";

import { Remove } from "@shared/ui";

import { TrailersStore } from "../../model";

interface Props {
  id?: string;
}

const RemoveTrailer = ({ id }: Props) => {
  return <Remove name={"прицеп"} store={TrailersStore} id={id} />;
};

export default observer(RemoveTrailer);
