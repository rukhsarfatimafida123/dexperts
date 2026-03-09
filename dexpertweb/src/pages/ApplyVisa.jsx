import { useParams } from "react-router-dom"
import heroImg from "../assets/hero2.jpg"

const ApplyVisa = () => {

const { visaType } = useParams()

return(

<div>

<section className="relative w-full h-[60vh]">

<div
className="absolute inset-0 bg-cover bg-center"
style={{backgroundImage:`url(${heroImg})`}}
></div>

<div className="absolute inset-0 bg-indigo-900/50"></div>

<div className="relative z-10 flex items-center justify-center text-white text-5xl font-bold h-full">

Apply for {visaType}

</div>

</section>



<section className="max-w-xl mx-auto py-20 px-6">

<form className="flex flex-col gap-4 bg-white shadow-xl p-8 rounded-xl">

<input type="text" placeholder="Full Name" className="border p-3 rounded"/>

<input type="email" placeholder="Email" className="border p-3 rounded"/>

<input type="text" placeholder="Phone Number" className="border p-3 rounded"/>

<input type="text" placeholder="Nationality" className="border p-3 rounded"/>

<textarea placeholder="Message" className="border p-3 rounded"></textarea>

<button className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-500">

Submit Application

</button>

</form>

</section>

</div>

)

}

export default ApplyVisa