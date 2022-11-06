import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { v4 as uuid } from "uuid";

import { wrapper } from "./sets.module.scss";

import { GeozonesStore } from "../../../../stores/entities";
import { ChangeSet } from "../../../../types/map";
import Changes from "../../../auxiliary/Changes";

const historyRenderer = (set: ChangeSet<FeatureLike>) => {
  return <Changes set={set} key={`changes-${uuid()}`} />;
};

const ChangeSets = () => {
  const history = GeozonesStore.history;

  return <div className={wrapper}>{history.map(historyRenderer)}</div>;
};

export default observer(ChangeSets);
