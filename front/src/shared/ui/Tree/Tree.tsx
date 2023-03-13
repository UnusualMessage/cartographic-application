import { DownOutlined } from "@ant-design/icons";
import { Tree as AntTree, Input } from "antd";
import type { TreeProps } from "antd/es/tree";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { wrapper, tree, search } from "./tree.module.scss";
import { Node } from "../../misc";

interface Props<T> {
  fillNodes: (source?: T[]) => Node[];
  source?: T[];
  handleSelect?: TreeProps["onSelect"];
  className?: string;
}

const { DirectoryTree } = AntTree;

const Tree = <T,>({ fillNodes, source, handleSelect, className }: Props<T>) => {
  const [nodes, setNodes] = useState(() => fillNodes(source));

  useEffect(() => {
    setNodes(fillNodes(source));
  }, [source]);

  return (
    <div className={classNames(wrapper, className)}>
      <div className={search}>
        <Input placeholder={"Искать..."} />
      </div>
      <DirectoryTree
        className={tree}
        showIcon={true}
        autoExpandParent={false}
        switcherIcon={<DownOutlined />}
        onSelect={handleSelect}
        treeData={nodes}
        defaultExpandAll
        showLine
      />
    </div>
  );
};

export default Tree;
