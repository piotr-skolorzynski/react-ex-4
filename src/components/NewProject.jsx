import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const tittle = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = tittle.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input ref={tittle} label="Tile" type="text" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type="date" />
      </div>
    </div>
  );
};

export default NewProject;
