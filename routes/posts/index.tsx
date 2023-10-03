import { Handlers, PageProps } from "$fresh/server.ts";
import { Post, getPosts } from '../../utils/posts.ts';
import { RouteConfig } from "$fresh/server.ts";

export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
        const posts = await getPosts();
        //console.log(`handler: posts = ${JSON.stringify(posts)}`);
        return ctx.render(posts);
    }
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <div class="w3-content w3-container">
            <h1>Blog Posts</h1>
            {posts.map((post) => <PostCard post={post} />)}
        </div>
    );
}

function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
        <div class="w3-panel w3-border w3-round-large">
            <a href={`/posts/${post.slug}`}>
                <h3>{post.title}</h3>
                <time class="w3-text-blue">{
                    new Date(post.publishedAt).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "Asia/Jakarta",
                        timeZoneName: "short",
                        hour12: false,
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                    })
                }
                </time>
                <div class="w3-container">{post.snippet}</div>
            </a>
            <p></p>
        </div>
    );
}
