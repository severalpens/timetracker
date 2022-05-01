
export default function InputText(props) {
const {entry, setEntry} = props;

const handleChange = (e) => {
  entry.name = e.target.value;
  setEntry(entry);
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
                    min-w-min
                  "
                  defaultValue={entry ? entry.name : null}
              onChange={handleChange}
            />
  )
}