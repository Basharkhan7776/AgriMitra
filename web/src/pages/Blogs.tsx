import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/firebase";
import { NavBarCommunity } from "@/components/navBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Ellipsis, Heart, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Card } from "@/components/ui/card";


const posts = [
  {
    title: "Can biologicals help milling wheat growers hit protein specs?",
    description: "Over the past couple of seasons, milling wheat growers have struggled to achieve 13% proteins, with AHDB figures showing Group 1s averaged the lowest levels in a decade at 12.5% in 2024 and 12.7% the season before that.",
    imageUrl: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2025/04/Spraying-wheat-with-fungacide-10751_GNP_7797_C_GNP-1024x577.jpg",
    authorName: "Farmer Weekely",
    postedDate: "2025-04-01",
    likes: 4,
  },
  {
    title: "Cereal Quality Survey confirms lower protein and nitrogen contents",
    description: "The 2024 AHDB Cereal Quality Survey reports low protein levels in wheat and nitrogen levels in barley due to challenging weather conditions",
    imageUrl: "https://projectblue.blob.core.windows.net/media/Default/News%20Images/Cereals%20&%20Oilseeds/2024/Wheat6.jpg",
    authorName: "AHDB",
    postedDate: "2025-02-01",
    likes: 12,
  },
  {
    title: "Can biologicals help milling wheat growers hit protein specs?",
    description: "Over recent seasons, milling wheat growers have struggled to achieve 13% protein levels, with AHDB figures showing Group 1 varieties averaging the lowest levels in a decade at 12.5% in 2024 and 12.7% the previous season.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NzraKVPXor4fHafrUJfRpM6GjW8DMQht_w&s",
    authorName: "Alice Dyer",
    postedDate: "2025-04-01",
    likes: 4
  },
  {
    title: "Cereal Quality Survey confirms lower protein and nitrogen contents",
    description: "The 2024 AHDB Cereal Quality Survey confirms harvest reports of low protein for wheat and low nitrogen levels in barley, attributed to persistent wet conditions through autumn and winter 2023/24.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSet5pzlaDYrqpGBCfevmG0cxfDyi_mvgH1VQ&s",
    authorName: "AHDB",
    postedDate: "2024-11-15",
    likes: 6
  },
  {
    title: "Growers warned tough year to meet milling wheat protein spec",
    description: "Farmers are advised to enhance crop nutrition plans to achieve required protein levels in ",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEe3H6jJq0wSI31NcnlN56dWBFqcSN_ZR8sQ&s",
    authorName: "Farmers Weekly",
    postedDate: "2024-05-10",
    likes: 9
  },
  {
    title: "Tips on meeting milling wheat protein levels with newer varieties",
    description: "Strategies for achieving desired protein levels in newer milling wheat varieties, including nitrogen application recommendations.",
    imageUrl:"https://img.etimg.com/thumb/width-640,height-480,imgsize-297517,resizemode-75,msid-91050614/news/economy/agriculture/agriculture-ministry-to-organise-campaign-next-week-to-highlight-achievements-in-farm-sector/agriculture.jpg",
    authorName: "Farmers Weekly",
    postedDate: "2024-06-15",
    likes: 12
  },
  {
    title: "Getting to the root of grain protein prediction in milling wheat",
    description: "Research on using root analysis to predict grain protein content",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9hsQfWLtRe0E_m-aWlphn_E7SYadcPgIfA&s",
    authorName: "AHDB",
    postedDate: "2023-03-20",
    likes: 45
  },
  {
    title: "Milling wheat protein – essential information",
    description: "An overview of the importance of protein content in milling wheat and factors affecting it.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8Y3_myF9IvtREV7UX5UBgIemj1s-qhDqvg&s",
    authorName: "NFU",
    postedDate: "2024-07-22",
    likes: 4
  },
  {
    title: "Milling wheat samples showing lower protein content: Grain market daily",
    description: "The first provisional set of Cereal Quality Survey results for harvest 2022 indicate that milling wheat samples are displaying lower percentage protein content, with an average of 12.5% for Group 1 varieties, below the milling specification of 13%.",
    imageUrl:"https://skillfloor.com/blog/uploads/images/202309/image_870x580_650d8350ae413.jpg",
    authorName: "AHDB",
    postedDate: "2022-09-09",
    likes: 2
  },
  {
    title: "Flour millers face supply crunch as wheat farmers tighten grip on stocks",
    description: "Wheat farmers in major exporting countries are hoarding their crops due to low prices, leading to a supply crunch for flour millers. Prices for wheat are at a four-year low, causing farmers in the U.S., Australia, and the Black Sea region to hold out for better prices. Flour mills in Asia and the Middle East currently have only 45 to 60 days of supply, much less than usual. This situation makes mills vulnerable to price hikes, especially since global wheat reserves are projected to hit a nine-year low. High interest rates are also discouraging millers from stockpiling, exacerbating the supply issue. Despite strong wheat production in the southern hemisphere, potential weather problems and shrinking inventories could further increase prices. Russian farmers have begun selling crops due to favorable interest rates, but Russia's grain export quota could be much smaller next year.",
    imageUrl:"https://www.icrisat.org/assets/template/images/research/Digital-agriculture-overview.jpg",
    authorName: "Reuters",
    postedDate: "2024-11-21",
    likes: 34
  },
  {
    title: "AHDB publishes its 2024 Cereal Quality Survey",
    description: "The Agricultural and Horticultural Development Board (AHDB) has published its Cereal Quality Survey for 2024. The survey indicates that milling wheat samples have notably lower-than-average protein contents, reflecting the difficult weather during the growing season. Persistent wet conditions through autumn and winter, plus much of spring, made it difficult for farmers to apply nitrogen. The average protein levels for UK Flour Millers group 1 varieties in 2024 is 12.5%, which is 0.5 percentage points below the milling requirement of 13.0% or greater. This is a slight decrease from the 2023 average of 12.7% and the lowest level since 2014.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcl5cm4yOcolPQVzXyJ-F0hXQgHEbSwZK9w&s",
    authorName: "Agriland",
    postedDate: "2024-11-16",
    likes: 34
  },
  {
    title: "Cereal Quality Survey",
    description: "The 2024 AHDB Cereal Quality Survey results are now available. Milling wheat samples in the 2024 survey have notably lower-than-average protein contents reflecting the difficult weather during the growing season. Persistent wet conditions through autumn and winter, plus much of spring, meant it was difficult for farmers to get onto fields and apply nitrogen. The average protein levels for UK Flour Millers group 1 varieties in 2024 is 12.5%, which is 0.5 percentage points below the milling requirement of 13.0% or greater. This is a slight decrease from the 2023 average of 12.7% and the lowest level since 2014.",
    imageUrl:"https://www.orfonline.org/public/uploads/posts/image/img-Agriculture-1.jpg",
    authorName: "AHDB",
    postedDate: "2024-10-25",
    likes: 93
  },
  {
    title: "Harvest 2023 final report",
    description: "The 2023 GB harvest started mid-July, slightly behind the 2022 harvest. More rainfall and wet spells were seen this year compared to 2022, but sporadic small windows of mild, dry weather allowed for steady progression. Early indications suggested that protein is down this year compared to last, and previous years. Our results show wheat protein averaging at 9.80% (excluding Scotland) on an ‘as is’ basis. It is possible that further decrease in protein from last year could be due to the wet spells we experienced sporadically throughout summer as heavily saturated soil could reduce nitrogen uptake.",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswo_dGvGa2APcC6qEHPO3nl9p53MvyPCx3Q&s",
    authorName: "Premier Nutrition",
    postedDate: "2023-09-30",
    likes: 3
  }

];



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
    console.log(error);
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
          {/*All Categories Popover */}
          <Popover>
            <PopoverTrigger>
              <Button variant={"secondary"}>
                All Categories
                <ChevronDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Categories</PopoverContent>
          </Popover>

          {/*Create Post Dialog box */}
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
                  <Label>Upload your picture</Label>
                  <Input
                    type="file"
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
        <div className="flex flex-wrap gap-4 justify-center items-center">
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
          {posts.map((post) => (
            <BlogsPost
              image={post.imageUrl}
              title={post.title}
              description={post.description}
              date={post.postedDate}
              authorName={post.authorName}
              authorAvator="https://static.vecteezy.com/system/resources/previews/045/868/113/non_2x/picture-symbol-icon-vector.jpg"
              handleLike={handleLike}
              blog={post}
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
    <Card className=" sm:w-[400px]">
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
    </Card>
  );
}