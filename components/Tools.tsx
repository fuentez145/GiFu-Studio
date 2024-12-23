import Image from "next/image"

type ToolsProps = {
    name: string
}
    
const Tools = ({ name } : ToolsProps) => {
  return (
    <div className="flex items-center gap-2">
        <Image
          src="/tool_icons/figma.svg"
          alt="Workflow"
          decoding="async"
          width={14}
          height={14}
        />
        <h4>{name}</h4>
      
    </div>
  )
}

export default Tools
