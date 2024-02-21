import Footer from "../../components/footer";
import Navbar from "../../components/header";
import { BlogFeatured, BlogHero, BlogList } from "../../sections/homepage/Blog";
import { SignupForms } from "../../sections/homepage/Hero";
import { posts } from "../../sections/homepage/data/posts";


export default function Blog() {
    return (
        <>
            <Navbar />
                <BlogHero />
                <BlogFeatured />
                <BlogList posts={posts} />
                <SignupForms />
            <Footer />
        </>
    )
}
