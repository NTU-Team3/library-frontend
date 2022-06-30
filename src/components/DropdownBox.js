import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropdownBox({ value, handleSelect }) {
  return (
    <DropdownButton
      id="dropdown-item-button"
      variant={"dropdown-item-button"}
      title={value}
    >
      <Dropdown.Item as="button" onClick={handleSelect}>
        Most Popular
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={handleSelect}>
        Trending
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={handleSelect}>
        Something else
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownBox;
