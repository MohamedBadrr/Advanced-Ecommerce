import { useAppSelector } from "@/store/hooks"

const Profile = () => {
  const {user} = useAppSelector((state) => state.auth.loginData) 
  return (
    <div>
        <h1 className="text-[40px] font-semibold mb-5">Profile</h1>
        <div className="flex flex-col items-start w-full max-w-[600px] justify-start ">
          <ul className="flex flex-col gap-2 mb-5">
            <li className="text-[20px] font-semibold">User Information</li>
            <li className="text-[16px] font-semibold">First Name : {user.firstName}</li>
            <li className="text-[16px] font-semibold">Last Name : {user.lastName}</li>
            <li className="text-[16px] font-semibold">Email : {user.email}</li>
          </ul>


        </div>
    </div>
  )
}

export default Profile