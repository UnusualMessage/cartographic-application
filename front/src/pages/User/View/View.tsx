import React from "react";

import { Loader, Content } from "@shared/ui";
import {
  Overlays,
  UserAside,
  EntitiesMenu,
  Schema,
  UserFooter,
  InfoMenu,
} from "@widgets/index";

const View = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Overlays />
      <UserAside>
        <EntitiesMenu />
      </UserAside>
      <Content>
        <Schema />
        <UserFooter>
          <InfoMenu />
        </UserFooter>
      </Content>
    </React.Suspense>
  );
};

export default View;
