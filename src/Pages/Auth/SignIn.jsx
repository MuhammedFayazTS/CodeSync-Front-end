import { Icons } from "@/components/icons.jsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "components/ui/card"
import { Input } from "components/ui/input"
import { Label } from "components/ui/label"
import { Button } from "components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { ServerVariables } from "utils/server-variables"
import { useState } from "react"
import { signInLocalAPI } from "services/allAPIs"

export function SignIn() {

    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({ email: "", password: "" })

    // handle change
    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }


    const signInWithGoogle = () => {
        window.open(import.meta.env.VITE_BACKEND_URL + import.meta.env.VITE_API_VERSION + ServerVariables.GoogleAuth, "_self")
    }

    // sign in with email and password
    const signInWithEmailPass = async (e) => {
        e.preventDefault();
        try {
            const credentials = {
                withCredentials: true
            };
    
            if (!userDetails.email || !userDetails.password || userDetails.email === "" || userDetails.password === "") {
                return alert("Please fill in all the fields.");
            }
    
            const response = await signInLocalAPI(userDetails, credentials);
            if (response?.data?.success) {
                alert("Sign in successful.");
                navigate('/');
            } else {
                alert("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again later.");
        }
    };  



    return (
        <section className="w-full h-screen flex justify-center items-center relative ">

            {/* back btn */}
            <button onClick={() => navigate(-1)}
                className="group hover:px-2 transition-all duration-300 ease-in-out
             absolute top-5 left-5 min-w-10 w-fit h-10 rounded-lg border border-gray-300 dark:border-gray-700 shadow inline-flex justify-center items-center cursor-pointer dark:bg-gray-950">
                <Icons.ArrowLeft className="h-4 w-4 group-hover:rotate-45 transition-all duration-300 ease-in-out  dark:stroke-white" />
                <span className="hidden group-hover:block scale-0 group-hover:scale-100 text-sm text-gray-600 dark:text-gray-50 transition-all duration-300 ease-in-out">Back</span>
            </button>

            <Card className="z-10 min-w-96">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Sign In</CardTitle>
                    <CardDescription>
                        Enter your email below to Sign In to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                        <Button variant="outline">
                            <Icons.gitHub className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                        <Button variant="outline" onClick={signInWithGoogle} >
                            <Icons.google className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-gray-950 px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="m@example.com" onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" type="password" onChange={handleChange} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full" onClick={signInWithEmailPass}>Sign In  </Button>
                    <CardDescription>
                        don't have an account?
                        <Link to={'/sign-up'} className="text-gray-950 dark:text-gray-200 font-semibold ml-1 hover:underline">
                            Create account
                        </Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </section>
    )
}