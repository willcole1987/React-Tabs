import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import RemoveTab from "./RemoveTab";
import AddTab from "./AddTab";

const ButtonNavigation = ({
  backTab,
  forwardTab,
  add,
  remove,
  addTab,
  removeTab
}) => {
  const [backward, forward] = ["<<", ">>"];

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={backTab}>
        {backward}
      </Button>
      <Button variant="secondary" onClick={forwardTab}>
        {forward}
      </Button>
      <Button variant="secondary" onClick={addTab}>
        {add}
      </Button>
      <Button variant="secondary" onClick={RemoveTab}>
        {remove}
      </Button>
    </ButtonGroup>
  );
};

export default ButtonNavigation;
