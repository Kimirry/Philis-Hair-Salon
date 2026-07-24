import { useState } from "react";

export default function LanguageSwitcher(){

const [language,setLanguage] = useState("EN");


return (

<button

onClick={() =>
setLanguage(
language === "EN" ? "AR" : "EN"
)
}

className="
border
border-pink-300
rounded-full
px-4
py-2
text-sm
hover:bg-pink-50
transition
"

>

{language}

</button>

);

}
