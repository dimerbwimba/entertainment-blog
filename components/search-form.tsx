"use client"
import { useSearchModelState } from "@/store/use-search-model";
import { useRouter } from "next/navigation"; // import from next/navigation
import { useState } from "react";

export const SearchForm = () => {
  const { isOpen, close } = useSearchModelState();
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
    <div className={`search_form_menu_personal ${isOpen && `search_form_menu_personal_active`}`}>
      <div onClick={close} className="menu_mobile_large_close">
        <span className="jl_close_wapper search_form_menu_personal_click">
          <span className="jl_close_1"></span>
          <span className="jl_close_2"></span>
        </span>
      </div>
      <div className="searchform_theme">
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // handle key down event
          value={input}
          type="text"
          placeholder="Search..."
          className="search_btn"
        />
        <button onClick={handleKeyDown} type="button" className="button">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};
