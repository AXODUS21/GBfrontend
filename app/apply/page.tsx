"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"
import { Loader2, CheckCircle } from "lucide-react"

export default function ApplyPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    schoolName: "",
    district: "",
    gradeLevel: "",
    programType: "",
    financialNeedDescription: "",
    academicGoals: "",
    studentCount: "1",
    voucherAmount: "",
    country: "USA",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { data, error } = await supabase
        .from("scholarship_applications")
        .insert([
          {
            student_name: formData.studentName,
            email: formData.email,
            phone: formData.phone || null,
            school_name: formData.schoolName,
            district: formData.district || null,
            grade_level: formData.gradeLevel || null,
            program_type: formData.programType,
            financial_need_description: formData.financialNeedDescription || null,
            academic_goals: formData.academicGoals || null,
            student_count: parseInt(formData.studentCount) || 1,
            voucher_amount: formData.voucherAmount ? parseFloat(formData.voucherAmount) : null,
            country: formData.country,
            status: "pending",
          },
        ])
        .select()

      if (error) throw error

      toast.success("Application submitted successfully!")
      setIsSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          studentName: "",
          email: "",
          phone: "",
          schoolName: "",
          district: "",
          gradeLevel: "",
          programType: "",
          financialNeedDescription: "",
          academicGoals: "",
          studentCount: "1",
          voucherAmount: "",
          country: "USA",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error: any) {
      console.error("Error submitting application:", error)
      toast.error(error.message || "Failed to submit application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <main>
        <Navigation />
        <section className="min-h-screen flex items-center justify-center py-16 md:py-24 bg-background">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Application Submitted!</h2>
                <p className="text-foreground/70">
                  Thank you for your application. We'll review it and get back to you via email within 5-7 business days.
                </p>
                <Button onClick={() => router.push("/")} className="mt-4">
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navigation />

      <section className="bg-gradient-to-br from-primary to-accent/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Apply for Scholarship
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Complete the form below to apply for educational support through our scholarship program.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Scholarship Application Form</CardTitle>
              <CardDescription>
                Please fill out all required fields. We'll review your application and contact you via email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">
                      Student Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gradeLevel">Grade Level</Label>
                    <Select
                      value={formData.gradeLevel}
                      onValueChange={(value) => handleSelectChange("gradeLevel", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elementary">Elementary School</SelectItem>
                        <SelectItem value="middle">Middle School</SelectItem>
                        <SelectItem value="high">High School</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="schoolName">
                      School Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                      placeholder="Enter school name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="district">School District</Label>
                    <Input
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="Enter district name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="programType">
                    Program Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.programType}
                    onValueChange={(value) => handleSelectChange("programType", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tutoring Scholarships">Tutoring Scholarships</SelectItem>
                      <SelectItem value="College Teaching Fellowship">College Teaching Fellowship</SelectItem>
                      <SelectItem value="Community Mentorship">Community Mentorship</SelectItem>
                      <SelectItem value="Outreach Initiatives">Outreach Initiatives</SelectItem>
                      <SelectItem value="Educational Materials & School Supplies">
                        Educational Materials & School Supplies
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentCount">Number of Students</Label>
                    <Input
                      id="studentCount"
                      name="studentCount"
                      type="number"
                      min="1"
                      value={formData.studentCount}
                      onChange={handleChange}
                      placeholder="1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="voucherAmount">Requested Voucher Amount ($)</Label>
                    <Input
                      id="voucherAmount"
                      name="voucherAmount"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.voucherAmount}
                      onChange={handleChange}
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="financialNeedDescription">Financial Need Description</Label>
                  <Textarea
                    id="financialNeedDescription"
                    name="financialNeedDescription"
                    value={formData.financialNeedDescription}
                    onChange={handleChange}
                    placeholder="Please describe your financial need and how this scholarship would help..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="academicGoals">Academic Goals</Label>
                  <Textarea
                    id="academicGoals"
                    name="academicGoals"
                    value={formData.academicGoals}
                    onChange={handleChange}
                    placeholder="Please describe your academic goals and how this program would support them..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/")}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}


