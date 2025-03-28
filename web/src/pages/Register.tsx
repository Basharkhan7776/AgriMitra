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

function Register() {
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
      />
      <div className="flex gap-4 justify-center items-center">
        <Card className="flex flex-col gap-5 p-4 justify-center items-center">
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
        <Card className="p-10 flex flex-col gap-2 w-[500px]">
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
                Create account text
              </Button>
            </form>
            <Button
              type="button"
              className="w-full mt-2"
              variant={"secondary"}
              onClick={handleGoogleSignIn}
            >
              Sign Up with Google
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-primary">
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
