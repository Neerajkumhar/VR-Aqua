export default function ActiveProductInfo({ slide }) {
  return (
    <div className="carousel__info">
      <p className="carousel__name">{slide.name}</p>
      <p className="carousel__sizes">{slide.sizeLabels.join(' / ')}</p>
    </div>
  )
}
