import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeProps } from "antd/es/tree";
import { useEffect, useState } from "react";

import { Node } from "../../misc";

interface Props<T> {
  fillNodes: (source?: T[]) => Node[];
  source?: T[];
  handleSelect?: TreeProps["onSelect"];
  className: string;
}

const { DirectoryTree } = Tree;

const EntitiesTree = <T,>({
  fillNodes,
  source,
  handleSelect,
  className,
}: Props<T>) => {
  const [nodes, setNodes] = useState(() => fillNodes(source));

  useEffect(() => {
    setNodes(fillNodes(source));
  }, [source]);

  return (
    <DirectoryTree
      className={className}
      defaultExpandAll
      showIcon={true}
      showLine
      autoExpandParent={false}
      switcherIcon={<DownOutlined />}
      onSelect={handleSelect}
      treeData={nodes}
    />
  );
};

export default EntitiesTree;
