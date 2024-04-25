import { ReactElement, FC } from "react";
import Button from "../Button";
import { iActiveCarTypes } from "../../types/[types].ts";
import { defaultPanelText } from "../../mockData.ts";
import { controlButtons } from "../../constants/constants.ts";

import "./controlPanel.scss";

type iControlPanelTypes = {
  activeCar: iActiveCarTypes;
  isSelectionMapPosition: boolean;
  handleControlClick: (id: string) => void;
};


const ControlPanel: FC<iControlPanelTypes> = ({
  activeCar,
  isSelectionMapPosition,
  handleControlClick
}): ReactElement => {

  return (
    <div className="controlPanelWrapper">
      <div className="controlPanelButtons">
        <Button
          disabled={!activeCar.id || !activeCar.available}
          onClick={() => handleControlClick(controlButtons.rent)}
        >
          {controlButtons.rent}
        </Button>

        <Button
          disabled={!activeCar.id || activeCar.available}
          onClick={() => handleControlClick(controlButtons.return)}
        >
          {controlButtons.return}
        </Button>
      </div>

      {isSelectionMapPosition ? (
        <p className="controlPanelText">{defaultPanelText}</p>
      ) : null}
    </div>
  )
};

export default ControlPanel;
