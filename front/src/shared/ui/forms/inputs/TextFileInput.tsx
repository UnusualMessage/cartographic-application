import { FolderOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ChangeEventHandler, useRef } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  onLoad: (result: string) => void;
}

const TextFileInput = ({ onLoad }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        const result = reader.result as string;

        if (reader.result) {
          onLoad(result);
        }
      };
    }
  };

  const id = uuid();

  return (
    <>
      <input ref={ref} id={id} type="file" hidden onChange={onChange} />
      <label htmlFor={id}>
        <Button
          icon={<FolderOutlined />}
          type={"text"}
          onClick={() => ref.current?.click()}
        />
      </label>
    </>
  );
};

export default TextFileInput;
