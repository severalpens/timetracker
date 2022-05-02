
export default function InputProject(props) {
  const {  projects, setProjectTasksId } = props;

  return (
      <div className="mb-3 xl:w-96" >
          <label className="form-label inline-block mb-2 text-gray-700" htmlFor="input-project">Project:</label>
          <select  className="
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
              id="input-project"
              name="input-project"
              onChange={e => setProjectTasksId(e.target.value)}>
                  <option key='unassigned' value='unassigned'>
                      -
                  </option>
              {projects ? projects.map((project) => (
                  
                  <option key={project.id} value={project.id}>
                      {project.name}
                  </option>
                  )) : ''}
          </select>
      </div>
  )
}
