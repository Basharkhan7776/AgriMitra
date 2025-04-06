import { useState, useContext } from "react";
import { auth, db, provider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import SignupImage from "@/assets/SignupImage.png";
import { Bot, ChartLine, Users } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { NavBarHome } from "@/components/navBar";
import { HomeSidebar } from "@/components/app-sidebar";


function Register() {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), { email });
      dispatch({ type: "LOGIN", payload: user });
      navigate("/setup");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      dispatch({ type: "LOGIN", payload: user });
      if (!userSnap.exists()) {
        await setDoc(userRef, { email: user.email });
        navigate("/setup");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <NavBarHome
        mainButtonSite="/login"
        mainButtonText="Sign in"
        homePage={false}
        toggle={toggle}
        setToggle={setToggle}
      />
      <HomeSidebar toggle={toggle} setToggle={setToggle} />
      <div className="flex gap-4 justify-center items-center">
        <Card className="hidden xl:flex flex-col gap-5 p-4 justify-center items-center">
          <img src={SignupImage} alt="Signup" className="rounded-xl h-96" />
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <Bot stroke="#07B506" />
              <div>
                <h1 className="font-semibold">Smart Farming Solutions</h1>
                <p className="text-secondary-foreground text-sm">
                  Access cutting-edge agricultural technology and AI-powered
                  insights
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Users stroke="#07B506" />
              <div>
                <h1 className="font-semibold">Community Support</h1>
                <p className="text-secondary-foreground text-sm">
                  Connect with expert farmers and agricultural specialists
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <ChartLine stroke="#07B506" />
              <div>
                <h1 className="font-semibold">Yield Optimization</h1>
                <p className="text-secondary-foreground text-sm">
                  Maximize your farm's productivity with data-driven decisions
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-4 sm:p-10 flex flex-col gap-2 m-4 md:m-0 md:w-[500px]">
          <CardTitle className="text-2xl text-center">
            Create your account
          </CardTitle>
          <CardDescription className="text-center">
            Join thousands of farmers already using AgriMitra
          </CardDescription>
          <CardContent className="flex flex-col gap-3">
            <form onSubmit={handleSignUp} className="flex flex-col gap-3">
              <div>
                <Label>Email address</Label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-1 items-center">
                <Checkbox />
                <p>I agree to the</p>
                <a href="#terms" className="text-primary">
                  Terms and Conditions
                </a>
              </div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>
            <div className="flex justify-center">
              <h1 className="text-[12px] font-semibold">OR</h1>
            </div>
            <Button
              type="button"
              className="w-full mt-2"
              variant={"secondary"}
              onClick={handleGoogleSignIn}
            >
              <GoogleLogo /> Sign Up with Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p>
              Already have an account?{" "}
              <a onClick={() => { navigate("/login") }} className="text-primary cursor-pointer">
                Sign in here
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Register;

function GoogleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2443"
      height="2500"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 262"
    >
      <path
        fill="#4285F4"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      ></path>
      <path
        fill="#34A853"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      ></path>
      <path
        fill="#FBBC05"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      ></path>
      <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      ></path>
    </svg>
  );
}
