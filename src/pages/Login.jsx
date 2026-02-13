import LoginHeader from "../shared/ui/login-header"
import LoginContents from "../shared/sections/login-contents"

export default function Login() {
    return (
        <div className="flex flex-col h-screen overflow-hidden w-full">
            <LoginHeader />
            <LoginContents />
        </div>
    )
}

