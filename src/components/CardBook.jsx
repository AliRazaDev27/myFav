import { useState, useEffect } from 'react'
export default function CardBook({ data }) {
  const [img, setImg] = useState("")

  useEffect(() => {

    setImg(data.img + "-M.jpg")
  }, [img, data.img])
  return (
    <>
      <div className="flex border-2 mx-auto">
        <div className="w-[180px]  border-2 border-black"><img src={img} alt="" /></div>
        <div className="bg-black text-white p-4 w-[500px] border-2 border-red-900 rounded-2xl shadow-xl shadow-neutral-500">
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

      </div>
    </>
  )
}

