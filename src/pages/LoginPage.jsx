import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../store/features/auth/authSlice"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const handleSumbit = () => {
    console.log("clicked")
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    dispatch(login(user)).unwrap().
      then(res => {
        console.log(res)
        if (res.success === true) {
          navigate("/")
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required ref={passwordRef} />
              </div>
              <Button type="button" onClick={() => handleSumbit()} className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

      </div>
    </>
  )
}
