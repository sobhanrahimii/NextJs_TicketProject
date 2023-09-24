import Link from "next/link"

export default function NotFound(){
  return (
    <main className="text-center">
        <h2> We Hit the brick wall!</h2>
        <p>We Could not found the page you were looking for.</p>
        <p>Go Back <Link href="/tickets">Dashbord</Link></p>
    </main>
  )
}
