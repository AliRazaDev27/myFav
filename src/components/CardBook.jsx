export default function CardBook({ data }) {
  return (
    <>
      <div className="bg-black text-white max-w-[500px] p-4  my-4 mx-auto border rounded-2xl shadow-xl shadow-neutral-500">
        <h1 className="text-2xl py-2"><span>{data.rank}</span> {data.title}</h1>
        <div className="flex justify-between py-2">
          <p>{data.author}</p>
          <p>{data.year}</p>
        </div>
        <div className="flex justify-between py-2">
          <p>{data.country}</p>
          <p>{data.language}</p>
        </div>
        <p>{data.description}</p>
      </div>
    </>
  )
}

