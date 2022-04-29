
export default function InputText(props) {
const {task, setTask} = props;

const handleChange = (e) => {
  task.name = e.target.value;
  setTask(task);
}
  return (
            <input type="text" className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white 
                    focus:border-blue-600 
                    focus:outline-none
                  "
                  defaultValue={task ? task.name : null}
              onChange={handleChange}
            />
  )
}
