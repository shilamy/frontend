import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AppSidebar } from "@/components/AppSidebar"
import { ArrowLeft, Upload } from 'lucide-react'
import Link from "next/link"

export default function UploadResource() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !title || !category) {
      alert("Please fill in all required fields");
      return;
    }

    // Create FormData object to send file and other data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/resources/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Resource uploaded successfully!");
        // Redirect to resources page
        window.location.href = "/resources";
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading resource:", error);
      alert("Failed to upload resource. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pb-16">
      <header className="border-b p-4">
        <div className="flex items-center gap-2">
          <Link href="/resources" className="text-muted-foreground">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">Back</h1>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              {file ? file.name : "Choose a file to upload"}
            </p>
            <Input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
            />
            <Label
              htmlFor="file-upload"
              className="mt-4 inline-block"
            >
              <Button type="button" onClick={() => document.getElementById('file-upload')?.click()}>
                Select File
              </Button>
            </Label>
          </div>

          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                placeholder="Enter resource title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="w-full p-2 border rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="geography">Chemistry</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <textarea
                id="description"
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="Add a description for your resource"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              Upload Resource
            </Button>
          </div>
        </form>
      </main>

      <AppSidebar/>
    </div>
  )
}