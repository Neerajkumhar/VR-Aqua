import { DropMark } from './Icons'

export default function Logo({ compact = false, className = '' }) {
  return (
    <span className={`logo ${compact ? 'logo--compact' : ''} ${className}`.trim()} aria-label="VR AQUA">
      <span className="logo__mark" aria-hidden="true">
        <DropMark size={compact ? 18 : 22} />
      </span>
      <span className="logo__type">
        <span className="logo__vr">VR</span>
        <span className="logo__aqua">AQUA</span>
      </span>
    </span>
  )
}
