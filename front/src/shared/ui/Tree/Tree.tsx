import { DownOutlined, GroupOutlined } from "@ant-design/icons";
import { Tree as AntTree, Input, Dropdown, MenuProps } from "antd";
import type { TreeProps } from "antd/es/tree";
import classNames from "classnames";
import { cloneDeep } from "lodash";
import { useEffect, useState, ChangeEventHandler, Key } from "react";

import { wrapper, tree, search } from "./tree.module.scss";
import { usePopup, findNode } from "../../lib";
import { Node, Group } from "../../misc";
import Condition from "../Condition";
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
  const [nodes, setNodes] = useState(groups[0].getNodes(source));
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
      <div className={search}>
        <Input placeholder={"Искать..."} onChange={onChange} />
        <Condition truthy={items.length > 1}>
          <Dropdown
            menu={{ items: items, selectable: true, onClick: onGroupSwitch }}
            trigger={["click"]}
          >
            <GroupOutlined />
          </Dropdown>
        </Condition>
      </div>

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
