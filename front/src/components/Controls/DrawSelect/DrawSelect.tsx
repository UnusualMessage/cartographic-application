import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { observer } from "mobx-react-lite";

import InteractionsStore from "../../../stores/InteractionsStore";
import { DrawType } from "../../../types/DrawType";

const DrawSelect = () => {
  const onSelect = (e: SelectChangeEvent<DrawType>) => {
    InteractionsStore.changeDrawType(e.target.value as DrawType);
  };

  return (
    <FormControl size="small">
      <InputLabel id="draw-label">Тип</InputLabel>
      <Select
        labelId="draw-label"
        id="draw-select"
        value={InteractionsStore.getDrawType}
        label="Тип"
        onChange={onSelect}
        disabled={InteractionsStore.readonly}
      >
        <MenuItem value={"None"}>Курсор</MenuItem>
        <MenuItem value={"Polygon"}>Полигон</MenuItem>
        <MenuItem value={"Circle"}>Круг</MenuItem>
        <MenuItem value={"LineString"}>Линия</MenuItem>
        <MenuItem value={"Point"}>Точка</MenuItem>
      </Select>
    </FormControl>
  );
};

export default observer(DrawSelect);
