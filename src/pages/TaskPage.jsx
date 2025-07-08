import { ChevronLeft } from "lucide-react";
import { useSearchParams,useNavigate } from "react-router-dom";
function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
    
    <div className="w-screen h-screen  bg-gray-500 flex justify-center p6">
      <div className="w-[500px] space-y-4">
        
        <div className="flex justify-center">
           <button onClick={()=>navigate(-1)} className=" absolute left-0 top-0 text-slate-100">
            <ChevronLeft/>
           </button>
            <h1 className="text-3xl text-center text-slate-100 font-mono">
            Task Details
            </h1> 
        </div>
            <div className="space-y-4 p-6 bg-gray-200 rounded-md shadow font-mono">
                <h2 className="text-xl font-bold">Title: {title}</h2>
                <p className="text-gray-700">Description: {description}</p>
          </div>
      </div>
    </div>  
  );
}
export default TaskPage;