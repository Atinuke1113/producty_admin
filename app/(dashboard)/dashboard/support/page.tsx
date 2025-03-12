import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Support</h2>
        <p className="text-muted-foreground">Get help and support for your account</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Help Center</CardTitle>
            <CardDescription>Browse our knowledge base and FAQs</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Visit Help Center</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Get in touch with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Contact Us</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Read our API and integration guides</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">View Documentation</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community</CardTitle>
            <CardDescription>Join our community forums</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Join Community</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 