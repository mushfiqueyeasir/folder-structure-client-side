import Folder from "../component/folder/Folder";
import { ChildFolder } from "../component/styles/component.styles";

export const folder = ({ data }) => {
  console.log(data);
  return data.children.map((item, index) => (
    <ChildFolder key={index}>
      <Folder item={item} index={item._id} />
    </ChildFolder>
  ));
};
