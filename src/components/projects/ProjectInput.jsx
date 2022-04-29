export default function ProjectInput(props) {
    const { task, setProject , tasks, project} = props;
    return (
        <div className="mb-3 xl:w-96" >
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
                autoComplete="chrome-off"
                id="project"
                name="project"
                defaultValue={task.project}
                onChange={e => setProject(e.target.value)}
                list="optionslist"
            />
            <datalist id="optionslist">
                {tasks ? tasks.map((task) =>  (
                    <option key={task.id} value={task.project}>{task.cateogry}</option>
                )) : ''}
            </datalist>
        </div>
    )
}
