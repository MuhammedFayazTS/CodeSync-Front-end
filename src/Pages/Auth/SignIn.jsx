import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icons } from "@/components/icons.jsx";
import { Button } from "components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components/ui/card";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { signInLocalAPI } from "services/allAPIs";
import { ServerVariables } from "utils/server-variables";
import BackButton from "components/custom/Back-button/BackButton";

export function SignIn() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [userDetails, setUserDetails] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const signInWithGoogle = () => {
        window.open(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_API_VERSION}${ServerVariables.GoogleAuth}`, "_self");
    };

    const signInWithEmailPass = async (e) => {
        e.preventDefault();
        try {
            const credentials = { withCredentials: true };
    
            if (!userDetails.email || !userDetails.password || userDetails.email === "" || userDetails.password === "") {
                return toast({
                    variant: "destructive",
                    title: "Validation Error",
                    description: "Please fill in all the fields.",
                });
            }
    
            const response = await signInLocalAPI(userDetails, credentials);
            if (response?.data?.success) {
                toast({
                    description: "Sign in successful.",
                });
                navigate('/');
            } else {
                toast({
                    variant: "destructive",
                    title: "Authentication Error",
                    description: "Invalid email or password. Please try again.",
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "An error occurred. Please try again later.",
            });
        }
    };  

    return (
        <section className="w-full h-screen flex justify-center items-center relative ">

            <BackButton posX={5} posY={5} />

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
                        Don't have an account?
                        <Link to={'/sign-up'} className="text-gray-950 dark:text-gray-200 font-semibold ml-1 hover:underline">
                            Create account
                        </Link>
                    </CardDescription>
                </CardFooter>
            </Card>
        </section>
    );
}