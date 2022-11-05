import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";

import { wrapper } from "./sets.module.scss";

import { GeozonesStore } from "../../../../stores/entities";
import { ChangeSet } from "../../../../types/map";
import Changes from "../../../auxiliary/Changes";

const historyRenderer = (set: ChangeSet<FeatureLike>) => {
  return <Changes set={set} />;
};

const ChangeSets = () => {
  const history = GeozonesStore.history;

  return <div className={wrapper}>{history.map(historyRenderer)}</div>;
};

export default observer(ChangeSets);
