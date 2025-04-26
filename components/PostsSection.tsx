import SinglePost from "./SinglePost";

async function getPosts() {
	const res = await fetch("http://localhost:3000/api/post", {
		cache: "no-store",
	});
	const data = await res.json();
	// 'docs' because Payload paginates results
	return data.docs;
}

const PostsSection = async () => {
	const data = await getPosts();
	console.log(data);
	return (
		<section className="w-10/12 mx-auto my-8">
			<h4 className="mb-8 text-xl font-semibold text-darkGray text-center">
				Blog Posts
			</h4>
			<div>
				{data.map((post: any, i: number) => (
					<SinglePost key={i} post={post} />
				))}
			</div>
		</section>
	);
};

export default PostsSection;
