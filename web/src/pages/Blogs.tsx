import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase";
import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Ellipsis, Heart, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default function Blogs() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState<
    { id: string; title: string; description: string; imageUrl: string; authorName: string; postedDate: any; likes: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !imageUrl) {
      setError("All fields are required.");
      return;
    }
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        description,
        imageUrl,
        authorName: auth.currentUser?.displayName || "Unknown",
        postedDate: serverTimestamp(),
        likes: 0,
      });
      setTitle("");
      setDescription("");
      setImageUrl("");
      setError("");
    } catch (err: any) {
      alert("Error creating blog post: " + err.message);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("postedDate", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as {
          title: string;
          description: string;
          imageUrl: string;
          authorName: string;
          postedDate: any;
          likes: number;
        }),
      }));
      setBlogs(blogsData);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleLike = async (blogId: string, currentLikes: number) => {
    const blogRef = doc(db, "blogs", blogId);
    await updateDoc(blogRef, { likes: currentLikes + 1 });
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full mt-20 p-4 px-12 flex flex-col gap-6">
      <NavBarCommunity currentPage={"blogs"} />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Input placeholder="Search Post..." />
          <Button variant={"secondary"}>
            All Categories
            <ChevronDown />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              {/* Use `asChild` to avoid nesting buttons */}
              <div>
                <Button>
                  <Plus />
                  Add Post
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create your blogs</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <Label>Enter your title</Label>
                  <Input
                    type="text"
                    placeholder="Title of the blog"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>Enter your description</Label>
                  <Textarea
                    placeholder="Description of the blog"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label>Enter your picture</Label>
                  <Input
                    type="text"
                    placeholder="Picture of the blog"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                </div>
                <Button type={"submit"}>Create Post</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-5">
          {blogs.map((blog) => (
            <BlogsPost
              key={blog.id}
              image={blog.imageUrl}
              title={blog.title}
              description={blog.description}
              date={blog.postedDate.toDate().toLocaleDateString()}
              authorName={blog.authorName}
              authorAvator="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
              handleLike={handleLike}
              blog={blog}
            />
          ))}
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Button size={"lg"}>
            <Ellipsis /> Load More
          </Button>
        </div>
      </div>
    </div>
  );
}

function BlogsPost({
  image,
  title,
  description,
  authorName,
  date,
  authorAvator,
  handleLike,
  blog,
}: {
  image: string;
  title: string;
  description: string;
  authorName: string;
  date: string;
  authorAvator: string;
  handleLike: any;
  blog: any;
}) {
  return (
    <div className="h-[500px]">
      <div className="h-1/2 w-full flex justify-center bg-white rounded-lg">
        <img className="bg-cover h-full rounded-lg" src={image} alt="post image" />
      </div>
      <div className="h-1/2 p-4 flex flex-col gap-2 justify-between">
        <div className="flex gap-2 items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src={authorAvator} />
            <AvatarFallback>{authorName[0] + authorName[1]}</AvatarFallback>
          </Avatar>
          <div>
            <p>{authorName}</p>
            <p>Posted on {date}</p>
          </div>
        </div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="flex gap-4">
          <Button variant={"secondary"} onClick={() => handleLike(blog.id, blog.likes)}>
            <Heart />
            {blog.likes}
          </Button>
        </div>
      </div>
    </div>
  );
}