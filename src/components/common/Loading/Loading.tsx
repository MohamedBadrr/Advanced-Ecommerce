import { TLoading } from "@/CustomTypes"

type LoadingProps = {
    status?: TLoading,
    error? : string,
}
const Loading = ({ error , status} :LoadingProps ) => {
  if(status === "pending"){
    return (
    <div className="grow flex items-center justify-center">
      <p className="font-bold text-[25px]">...Loading , Please Wait</p>
    </div>
  )}
  if(status === "failed"){
    return <div className="grow flex items-center justify-center">
    <p className="font-bold text-[25px]">{error}</p>
  </div>
  }
}

export default Loading