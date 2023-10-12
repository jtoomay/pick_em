import { getPosts } from "@/app/lib/actions/posts.actions"
import Paginator from "./Paginator"
import Post from "./Post"

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

const Wrapper = `w-full h-full flex flex-col gap-6`
const PostsWrapper = `flex flex-col gap-6 w-full bg-brown-100 max-w-[35rem] `
const Header = `text-3xl font-bold text-white`
