import Image from "next/image";
import { useRouter } from "next/router";

const LoginSignupHeader = () => {

     // ============= Router hooks ===================
     const router = useRouter();

    return (
        <header className="border-b">
            <nav className="container mx-auto py-3 px-3 flex lg:justify-start justify-center">
                <div>
                    <Image
                        src="/images/logo.png"
                        width={60}
                        height={50}
                        alt="logo"
                        className="cursor-pointer"
                        onClick={() => router.push('/')}
                    />
                </div>
            </nav>
        </header>
    )
}

export default LoginSignupHeader;