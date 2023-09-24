import Link from "next/link"

export default function NotFound(){
  return (
    <main className="text-center">
        <h2>There was a problem!</h2>
        <p>We Could not found the page you were looking for.</p>
        <p>Go Back <Link href="/">Dashbord</Link></p>
    </main>
  )
}
