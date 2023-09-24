async function getTickects(id)
{
    await new Promise(resolve => setTimeout(resolve , 500))
    const response = await fetch("http://localhost:4000/tickets/" + id ,{
        next : {
            revalidate : 60
        }
    })
    return response.json();
}

export default async function TicketsDetails({params}) {
    await new Promise(resolve => setTimeout(resolve , 500))
    const data = await getTickects(params.id);

  return (
    <main>
        <nav>
            <h2>Tickets Name</h2>
        </nav>

        <div className="card my-5">
                Title : <h3 className="inline">{data.title}</h3>
                <br />
                Email : <b><h4 className="inline text-green-700">{data.user_email}</h4></b>
                <p>{data.body}...</p>
                <div className={`pill ${data.priority}`}>
                    {data.priority} priority
                </div>
            </div>
    </main>
  )
}


