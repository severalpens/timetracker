
export default function InputNumber(props) {
const {setItem, elementId} = props;
  return (
            <input type="number" className="
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
              placeholder="1"
              id={elementId}
              name={elementId}
              defaultValue="1"
              onChange={e => setItem(e.target.value)}
            />
  )
}
