import Footer from "../../components/footer";
import Navbar from "../../components/header";
import { BlogHero, BlogList, BlogContent } from "../../sections/homepage/SingleBlogPage";
import { SignupForms } from "../../sections/homepage/Hero";
import { posts } from "../../sections/homepage/data/posts";


export default function Blog() {
    return (
        <>
            <Navbar />
                <BlogHero />
                <BlogContent />
                <BlogList posts={posts} />
                <SignupForms />
                {/* <BlogFeatured />
                <BlogList posts={posts} />
                <SignupForms /> */}
            <Footer />
        </>
    )
}
