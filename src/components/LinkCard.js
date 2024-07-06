import Link from 'next/link'

const LinkCard = ({ href, title, description, card_style }) => (
  <Link href={href}>
    <div className={card_style}>
      <h2>{title} &rarr;</h2>
      {description && <p>{description}</p>}
    </div>
  </Link>
)

export default LinkCard;
