import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ListGategories } from './ListGategories';

export const NavCategories = () => {
  const categorieList = useSelector((state) => state.uiStore.categories);

  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);

  const togglePanels = (newPanel) => {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  };

  return (
    <nav>
      <ul className="flex flex-col items-start">
        {categorieList.map((item, indx) => {
          return (
            <ListGategories
              key={indx}
              id={indx}
              subMenu={item.subCategories}
              togglePanels={(panel, id) => togglePanels(panel, id)}
            >
              {item.name}
            </ListGategories>
          );
        })}
      </ul>
    </nav>
  );
};
