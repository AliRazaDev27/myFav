import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
export default function Gradient({ children }) {
  const [index, setIndex] = useState(0)
  console.log(index)
  const array = [
    "bg-gradient-to-b from-[#a531dc]  to-[#4300b1]",
    "bg-gradient-to-b from-[#ff896d]  to-[#d02020]",
    "bg-gradient-to-b from-[#3793ff]  to-[#0017e4]",
    "bg-gradient-to-b from-[#ffd439]  to-[#ff7a00]",
    "bg-gradient-to-b from-[#7cf7ff]  to-[#4b73ff]",
    "bg-gradient-to-b from-[#ffed46]  to-[#ff7ec7]",
    "bg-gradient-to-b from-[#8fff85]  to-[#39a0ff]",
    "bg-gradient-to-b from-[#8a88fb]  to-[#d079ee]",
    "bg-gradient-to-b from-[#eaeaea]  to-[#8b8b8b]",
    "bg-gradient-to-b from-[#ffeb3a]  to-[#4def8e]",
    "bg-gradient-to-b from-[#565656]  to-[#181818]",
    "bg-gradient-to-b from-[#ffbb89]  to-[#7b6ae0]",
    "bg-gradient-to-b from-[#fff500]  to-[#ffb800]",
    "bg-gradient-to-b from-[#ffeaf6]  to-[#ff9de4]",
    "bg-gradient-to-b from-[#00b960]  to-[#00552c]",
    "bg-gradient-to-b from-[#ffe6a4]  to-[#ad8211]",
    "bg-gradient-to-b from-[#c5edf5]  to-[#4a879a]",
    "bg-gradient-to-b from-[#fff6eb]  to-[#dfd1c5]",
    "bg-gradient-to-b from-[#ff9d7e]  to-[#4d6ad0]",
    "bg-gradient-to-b from-[#dd7bff]  to-[#ff6c6c]",
    "bg-gradient-to-b from-[#e0ff87]  to-[#8fb85b]",
    "bg-gradient-to-b from-[#ffdc99]  to-[#ff62c0]",
    "bg-gradient-to-b from-[#dde4ff]  to-[#8da2ee]",
    "bg-gradient-to-b from-[#97e8b5]  to-[#5cb67f]",
    "bg-gradient-to-b from-[#24cfc5]  to-[#001c63]",
    "bg-gradient-to-b from-[#ff3f3f]  to-[#063cff]",
    "bg-gradient-to-b from-[#5d85a6]  to-[#0e2c5e]",
    "bg-gradient-to-b from-[#deb5ff]  to-[#6f00b3]",
    "bg-gradient-to-b from-[#ff5eef]  to-[#456eff]",
    "bg-gradient-to-b from-[#afcccb]  to-[#616566]",
    "bg-gradient-to-b from-[#4063bc]  to-[#6b0013]",
    "bg-gradient-to-b from-[#fff500]  to-[#ff00b8]",
    "bg-gradient-to-b from-[#ff5e98]  to-[#0f213e]",
    "bg-gradient-to-b from-[#ffc328]  to-[#e20000]",
    "bg-gradient-to-b from-[#ffadf7]  to-[#b1ff96]",
    "bg-gradient-to-b from-[#ffe70b]  to-[#27b643]",
    "bg-gradient-to-b from-[#b7dcff]  to-[#ffa4f6]",
    "bg-gradient-to-b from-[#61c695]  to-[#133114]",
    "bg-gradient-to-b from-[#5ee2ff]  to-[#00576a]",
    "bg-gradient-to-b from-[#9f25ff]  to-[#ff7a00]",
    "bg-gradient-to-b from-[#4643df]  to-[#0b0a47]",
    "bg-gradient-to-b from-[#ff0000]  to-[#470000]",
    "bg-gradient-to-b from-[#fadd76]  to-[#9f3311]",
    "bg-gradient-to-b from-[#d7003a]  to-[#19087e]",
    "bg-gradient-to-b from-[#d0004b]  to-[#88069d]",
    "bg-gradient-to-b from-[#00e0ee]  to-[#ad00fe]",
    "bg-gradient-to-b from-[#b9a14c]  to-[#000000]",
    "bg-gradient-to-b from-[#ff8570]  to-[#418cb7]"
  ]

  const [gradient, setGradient] = useState(array[index])
  console.log(gradient)
  function handleGradient(e) {
    // let value = `bg-gradient-to-b from-[${array[e][0]}] to-[${array[e][1]}]`
    setGradient(array[e])
  }
  useEffect(() => {
    setGradient(array[index])
  }, [index, array])
  return <div className={gradient}>
    <div className="flex gap-4">
      <Button type="button" onClick={() => setIndex(index - 1)}>Previous</Button>
      <Button type="button" onClick={() => setIndex(index + 1)}>Next</Button>
    </div>
    <div>
      {children}
    </div>
  </div>

}
