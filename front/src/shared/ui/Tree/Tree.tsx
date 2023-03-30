import { DownOutlined } from "@ant-design/icons";
import { MenuProps, Tree as AntTree } from "antd";
import type { TreeProps } from "antd/es/tree";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { ChangeEventHandler, Key, useEffect, useState } from "react";

import { tree, wrapper } from "./tree.module.scss";
import { TreeHeader } from "./ui";
import { findNode, usePopup } from "../../lib";
import { Group, Node } from "../../misc";
import Popup from "../Popup";

interface Props<T> {
  defaultSelected: Key;
  groups: Group<T>[];
  source?: T[];
  onSelect?: TreeProps["onSelect"];
  onRightClick?: TreeProps["onRightClick"];
  className?: string;
  menu?: JSX.Element;
}

const { DirectoryTree } = AntTree;

const Tree = <T,>({
  source,
  groups,
  onSelect,
  onRightClick,
  defaultSelected,
  className,
  menu,
}: Props<T>) => {
  const defaultGroup =
    groups.find((group) => group.defaultSelected) ?? groups[0];

  const [nodes, setNodes] = useState(defaultGroup.getNodes(source));
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

  const onGroupSwitch: MenuProps["onClick"] = (context) => {
    const group = groups.find((group) => group.key === context.key);

    if (group) {
      setNodes(group.getNodes(source));
    }
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

    if (!copy.length) {
      return;
    }

    const root = copy[0];

    mark(root);
    setNodes(copy);
  };

  useEffect(() => {
    setNodes(groups[0].getNodes(source));
  }, [source]);

  useEffect(() => {
    filter(nodes);
  }, [searchValue]);

  const items = groups.map((group) => {
    return { key: group.key, label: group.label };
  });

  return (
    <div className={classNames(wrapper, className)}>
      <TreeHeader
        menuItems={items}
        onGroupSwitch={onGroupSwitch}
        onSearchChange={onChange}
        searchValue={searchValue}
      />

      <DirectoryTree
        className={tree}
        switcherIcon={<DownOutlined />}
        onSelect={onSelect}
        onRightClick={onContextMenu}
        treeData={nodes}
        expandAction={false}
        defaultSelectedKeys={[defaultSelected]}
        defaultExpandAll
        showIcon
        showLine
      />
      <Popup visible={visible} x={position.x} y={position.y}>
        {menu}
      </Popup>
    </div>
  );
};

export default Tree;
