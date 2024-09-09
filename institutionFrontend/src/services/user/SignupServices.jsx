import instance from "../../utils/axios";


const SignupServices = {
  signup: async (data) => {
    const response = await instance.post('accounts/sign-up/',data)
    return response.data;
  },

  verifyOtp: async (email,password, otp ) => {
    console.log('datas to sent verify.,:',email,password, otp );

    const response = await instance.post('accounts/verify-otp/',{
        email:email,
        password:password,
        otp:otp
    } )
    return response.data;
  },
};

export default SignupServices;