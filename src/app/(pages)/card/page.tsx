"use client";

import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
import { CodeSection } from "@/components/code-section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Label } from "../label/label";
import { Input } from "../input/input";
import { Button } from "../button/button";

export default function CardPage() {
  return (
    <Sandbox
      component={
        <div className="w-full py-10 px-4 max-w-sm mx-auto">
          <Subtitle className="py-2">Card Example</Subtitle>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </div>
      }
    >
      <Title>Card</Title>
      <Paragraph>
        The Card component wraps groups of UI elements like forms, content
        blocks, or interactive items in a structured and elegant container
        optimized for mobile.
      </Paragraph>

      <CodeSection>
        {`<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Login to your account</CardTitle>
    <CardDescription>
      Enter your email below to login to your account
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button type="submit" className="w-full">Login</Button>
    <Button variant="outline" className="w-full">Login with Google</Button>
  </CardFooter>
</Card>`}
      </CodeSection>

      <Paragraph>
        Use Card subcomponents like <code>CardHeader</code>,{" "}
        <code>CardContent</code>, and <code>CardFooter</code> to clearly define
        structure. Mobile-friendly padding, radius, and layout are included by
        default.
      </Paragraph>
    </Sandbox>
  );
}
