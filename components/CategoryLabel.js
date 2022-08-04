import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Training: 'yellow',
    Nutrition: 'blue',
    Motivation: 'green',
    Rehab: 'purple',
    Newsletter: 'red',
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}