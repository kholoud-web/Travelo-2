import tempImg from "../../assets/img/last_product.jpg"
import star from "../../assets/icons/star.png"

function LastProduct({name}) {
  return (
    <>
    <div className="flex gap-2.5 items-center mb-4">
        <img src={tempImg} alt="latest product" className="h-16.25 w-19.5 bg-cover object-cover rounded-xs" />
        <div className="flex flex-col justify-between">
            <h3 className="font-normal text-lg text-[#4F4F4F] mb-2">{name}</h3>
            <img src={star} alt="Star rate" className="font-normal text-lg text-[#4F4F4F] mb-1"/>
            <p>35$</p>
        </div>
    </div>
    </>
  )
}

export default LastProduct
