import React from 'react';
import Footer from '../components/Footer';
import Navbr from '../components/navbr';
import BlogCard from '../components/blogCard';
import BannerSignUp from '../components/bannerSignUp';

function Blog(props) {
    return (
        <div>
            <Navbr />
            <section id="blog">

             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />
             <BlogCard />

            </section>

            <section id="pagination" className="section-p1">

                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>

            </section>
            <BannerSignUp />
            <Footer />
        </div>
    );
}

export default Blog;