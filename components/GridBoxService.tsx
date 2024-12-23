import BoxItem from "./BoxItem"

const GridBoxService = () => {
  return (
    <div className="relative grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-12">
      <BoxItem box_span="sm" />
      <BoxItem box_span="lg" />
      <BoxItem box_span="lg" />
      <BoxItem box_span="sm" />
    </div>
  )
}

export default GridBoxService
