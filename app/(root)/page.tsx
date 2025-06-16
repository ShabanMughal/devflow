import Link from "next/link";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/Search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn about React, help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" }
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createAt: new Date()
  },
  {
    _id: "2",
    title: "What is the difference between let and var in JavaScript?",
    description: "Can someone explain the difference between let and var?",
    tags: [
      { _id: "2", name: "JavaScript" },
      { _id: "3", name: "ES6" }
    ],
    author: { _id: "2", name: "Jane Smith" },
    upvotes: 7,
    answers: 3,
    views: 80,
    createAt: new Date()
  },
  {
    _id: "3",
    title: "How to center a div using CSS?",
    description: "I'm struggling to center a div both vertically and horizontally.",
    tags: [
      { _id: "4", name: "CSS" },
      { _id: "5", name: "HTML" }
    ],
    author: { _id: "3", name: "Alice Johnson" },
    upvotes: 15,
    answers: 6,
    views: 200,
    createAt: new Date()
  },
  {
    _id: "4",
    title: "Best practices for folder structure in Next.js?",
    description: "What are some recommended folder structures for a large Next.js project?",
    tags: [
      { _id: "6", name: "Next.js" },
      { _id: "2", name: "JavaScript" }
    ],
    author: { _id: "4", name: "Bob Lee" },
    upvotes: 12,
    answers: 4,
    views: 150,
    createAt: new Date()
  },
  {
    _id: "5",
    title: "How to use useEffect in React?",
    description: "I want to understand how useEffect works and when to use it.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "7", name: "Hooks" }
    ],
    author: { _id: "5", name: "Charlie Kim" },
    upvotes: 9,
    answers: 2,
    views: 60,
    createAt: new Date()
  }
];

interface SearchParams {
 searchParams: Promise<{[key: string]: string}>
}
const Home = async ({searchParams}: SearchParams) => {
  const {query = ""} = await searchParams;
  const filterQuestions = questions.filter((question)=> question.title.toLowerCase().includes(query?.toLowerCase()))
   
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch imgSrc="/icons/search.svg" placeholder="Search question..." otherClasses="flex-1" route="/" />
      </section>
<HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
       {filterQuestions.map((question)=>(
        <h1 key={question._id}>{question.title}</h1>
       ))}
      </div>
    </>
  );
};

export default Home;