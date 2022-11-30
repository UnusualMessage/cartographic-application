import { NonIdealState } from "@blueprintjs/core";

const Select = () => {
  return (
    <NonIdealState
      icon={"arrow-left"}
      iconSize={128}
      title={"Выберите настройку из меню слева"}
      description={
        "Выбор настройки откроет таблицу и действия, которые можно осуществить со справочной информацией"
      }
    />
  );
};

export default Select;
