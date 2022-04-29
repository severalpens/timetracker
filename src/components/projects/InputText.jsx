
export default function InputText(props) {
const {project, setProject} = props;

const handleChange = (e) => {
  project.name = e.target.value;
  setProject(project);
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
                  defaultValue={project ? project.name : null}
              onChange={handleChange}
            />
  )
}
