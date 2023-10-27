import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full md:h-[70%] md:w-full lg:w-[60%] xl:w-[50%] shadow-2xl rounded-md flex flex-col md:flex-row">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Login into your account or sign up if you are a new customer</p>
          <div className="flex flex-col gap-3">
            <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
              <Image
                src="/google.png"
                alt="Google"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>Sign in with Google</span>
            </button>
            <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
                className="object-contain"
              />
              <span>Sign in with Facebook</span>
            </button>
          </div>
          <p className="text-sm">
            Have a problem?{" "}
            <Link href="/" className="underline">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
