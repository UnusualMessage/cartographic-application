import { FormControlLabel, Switch } from "@mui/material";
import { observer } from "mobx-react-lite";
import InteractionsStore from "../../../stores/InteractionsStore";

const DrawSwitch = () => {
  const onSwitch = () => {
    InteractionsStore.readonly = !InteractionsStore.readonly;
  };

  return (
    <FormControlLabel
      control={
        <Switch checked={!InteractionsStore.readonly} onChange={onSwitch} />
      }
      label="Редактирование"
    />
  );
};

export default observer(DrawSwitch);
