import { getPosts } from "@/app/lib/actions/posts.actions"
import Paginator from "./Paginator"

export default function Feed({ posts, hasMorePosts }: any) {
  return (
    <div className={Wrapper}>
      <h1 className={Header}> Posts </h1>
      <div className={PostsWrapper}>
        {posts.map((post: any, i: number) => {
          return <Post post={post} key={post.id} />
        })}
      </div>
      <Paginator hasMorePosts={hasMorePosts} />
    </div>
  )
}

interface PostProps {
  post: { id: string; user: string; postBody: string }
}

function Post(post: PostProps) {
  return (
    <div className={PostWrapper}>
      <div className={ContentWrapper}>
        <span>{post.post.user}</span>
        <span>{post.post.postBody}</span>
      </div>
    </div>
  )
}

const Wrapper = `w-full h-full flex flex-col gap-6 `
const PostsWrapper = `flex flex-col gap-2 w-full bg-brown-100 max-w-[35rem] `
const Header = `text-3xl font-bold text-white`

// Post
const PostWrapper = `w-full bg-gray-200 rounded-xl p-2 text-slate-800 font-medium h-44`
const ContentWrapper = `flex flex-col gap-4 `
