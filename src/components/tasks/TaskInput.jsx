export default function TaskInput(props) {
    const { name, handleChange} = props;
    return (
        <div className="mb-3 xl:w-96">
                      <label className="form-label inline-block mb-2 text-gray-700" htmlFor="new-task-input">Task name:</label>
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
              id="new-task-input"
              value={name}
              onChange={handleChange}
            />
      </div>
    )
}
