"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props={
    query:string
}

export const SearchArticleForm = ({query}:Props) =>{
    const [input, setInput] = useState("");
  const router = useRouter();

  const handleKeyDown = (e:any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(`/search?s=${input}`);
      close()
    }
  };
    return (
        <div className=" my-10 border-b pb-8">
        <h1 className=" text-center">
            Search Result For : {query}
        </h1>
        <div className=" flex justify-center">
            <div className=" w-3/4 bg-gray-200 p-5 rounded-lg">
                <div className="searchform_theme">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown} // handle key down event
                        value={input}
                        type="text"
                        placeholder="Didn't find what you are looking for? Search here."
                        className=" bg-white"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}