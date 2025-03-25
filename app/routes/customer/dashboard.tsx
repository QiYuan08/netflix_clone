import { useState } from "react"

export default function dashboard() {

    const [isHover, setIsHover] = useState<boolean>(false);

    return <div className="card bg-base-100 w-96 shadow-sm">
        <div className="overflow-hidden hover:tranform-110 transition duration-300"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={(() => setIsHover(false)}
        >
        </div>
    </div>
}