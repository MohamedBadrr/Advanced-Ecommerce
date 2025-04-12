import { isAxiosError } from "axios"

const axiosErrorHandler = (err : unknown) => {
    if(isAxiosError(err)){
        return err.response?.data.message;
    }else {
        return "An unexpected error"; 
    }
}

export default axiosErrorHandler