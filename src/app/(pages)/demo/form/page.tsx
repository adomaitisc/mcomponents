"use client";

import { Subtitle } from "@/components/subtitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../card/card";
import { Input } from "../../input/input";
import { Label } from "../../label/label";
import { Switch } from "../../switch/switch";
import { Slider } from "../../slider/slider";
import { Button } from "../../button/button";
import { useState } from "react";

export default function FormDemoPage() {
  const [notifications, setNotifications] = useState(false);
  const [volume, setVolume] = useState([50]);

  return (
    <>
      <div className="w-full py-16 px-4 space-y-6">
        <Subtitle className="py-2">Form Demo</Subtitle>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>User Settings</CardTitle>
            <CardDescription>
              Configure your account preferences and notification settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" required>
                Full Name
              </Label>
              <Input id="name" type="text" placeholder="Enter your full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" required>
                Email Address
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications for new messages
                </p>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="volume">Volume Level</Label>
              <Slider
                id="volume"
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">
                Current volume: {volume[0]}%
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              <Button type="submit" className="flex-1">
                Save Settings
              </Button>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
