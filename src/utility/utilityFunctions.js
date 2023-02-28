import Folder from "../component/folder/Folder";

export const folder = ({ data }) => {
  console.log(data);
  return data.children.map((item, index) => (
    <div className="pl-6 pt-2" key={index}>
      <Folder item={item} index={item._id} />
    </div>
  ));
};
