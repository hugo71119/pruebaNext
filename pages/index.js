import Link from 'next/link'


export default function Home() {
  return (
    <>
      <h1>Hola mundo desde next.js</h1>


      <Link href="/nosotros">Ir a Nosotros</Link>
      <Link href="/servicios">Ir a Servicios</Link>
    </>
  )
}
