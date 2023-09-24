import Link from "next/link";

// fetch data
async function getTickects() {
  // loading to fetch and view resolve
  //   first get data in await
  await new Promise(resolve => setTimeout(resolve  , 500));

  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 2,
    },
  });
  return response.json();
}

export default async function TicketList() {
  const tickects = await getTickects();

  return (
    <>
      {tickects.map((ticket) => (
        <Link href={`/tickets/${ticket.id}`}>
          <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <h4>{ticket.user_email}</h4>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      ))}

      {tickects.length === 0 && (
        <p className="text-center">There are no openn ticket!</p>
      )}
    </>
  );
}
