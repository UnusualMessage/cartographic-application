import { DownOutlined } from "@ant-design/icons";
import { Tree as AntTree, Input } from "antd";
import type { TreeProps } from "antd/es/tree";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { useEffect, useState, ChangeEventHandler, Key } from "react";

import { wrapper, tree, search } from "./tree.module.scss";
import { usePopup } from "../../lib";
import { Node } from "../../misc";
import Popup from "../Popup";

interface Props<T> {
  fillNodes: (source?: T[]) => Node[];
  defaultSelected: Key;
  source?: T[];
  onSelect?: TreeProps["onSelect"];
  onRightClick?: TreeProps["onRightClick"];
  className?: string;
  menu?: JSX.Element;
}

const { DirectoryTree } = AntTree;

const fit = (node: Node, search: string) => {
  const regexp = / /g;
  return !!node.title
    ?.toString()
    .toLowerCase()
    .replace(regexp, "")
    .includes(search.toLowerCase().replace(regexp, ""));
};

const findNode = (node: Node, search: string): boolean => {
  if (search === "") {
    return true;
  }

  if (fit(node, search)) {
    return true;
  }

  if (node.children) {
    const nodes = node.children;

    for (const node of nodes) {
      if (findNode(node, search)) {
        return true;
      }
    }
  } else {
    return fit(node, search);
  }

  return false;
};

const Tree = <T,>({
  fillNodes,
  source,
  onSelect,
  onRightClick,
  defaultSelected,
  className,
  menu,
}: Props<T>) => {
  const [nodes, setNodes] = useState(() => fillNodes(source));
  const [searchValue, setSearchValue] = useState<string>("");
  const [position, visible, onPopup] = usePopup();

  const onContextMenu: TreeProps["onRightClick"] = (info) => {
    onPopup(info.event);

    if (onRightClick) {
      onRightClick(info);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const filter = (nodes: Node[]) => {
    const mark = (node: Node) => {
      node.disabled = !findNode(node, searchValue);

      if (node.children) {
        for (const child of node.children) {
          mark(child);
        }
      }
    };

    const copy = cloneDeep(nodes);
    const root = copy[0];

    mark(root);
    setNodes(copy);
  };

  useEffect(() => {
    setNodes(fillNodes(source));
  }, [source]);

  useEffect(() => {
    filter(nodes);
  }, [searchValue]);

  return (
    <div className={classNames(wrapper, className)}>
      <div className={search}>
        <Input placeholder={"Искать..."} onChange={onChange} />
      </div>
      <DirectoryTree
        className={tree}
        showIcon={true}
        autoExpandParent={false}
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
        onRightClick={onContextMenu}
        treeData={nodes}
        expandAction={false}
        defaultSelectedKeys={[defaultSelected]}
        defaultExpandAll
        showLine
      />
      <Popup visible={visible} x={position.x} y={position.y}>
        {menu}
      </Popup>
    </div>
  );
};

export default Tree;
