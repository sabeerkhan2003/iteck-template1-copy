import React, { useState } from 'react';
import post1 from "../../assets/posts/1.jpeg";
import post2 from "../../assets/posts/2.jpeg";
import post3 from "../../assets/posts/3.jpeg";
import post4 from "../../assets/posts/4.jpeg";
import user1 from "../../assets/posts/user1.jpeg";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Arrow icons

function Posts() {
    const posts = [
        {
            id: 1,
            title: 'Crypto Trends 2023',
            category: 'Technology',
            date: 'May 15, 2023',
            author: 'Admin',
            postImage: post1,
            authorImage: user1
        },
        {
            id: 2,
            title: 'Blockchain Advances',
            category: 'Technology',
            date: 'May 18, 2023',
            author: 'Admin',
            postImage: post2,
            authorImage: user1
        },
        {
            id: 3,
            title: 'AI & Crypto',
            category: 'Technology',
            date: 'Aug 15, 2023',
            author: 'Admin',
            postImage: post3,
            authorImage: user1
        },
        {
            id: 4,
            title: 'Metaverse Innovations',
            category: 'Technology',
            date: 'Sep 5, 2023',
            author: 'Admin',
            postImage: post4,
            authorImage: user1
        },
        {
            id: 5,
            title: 'Future of AI',
            category: 'Technology',
            date: 'Sep 10, 2023',
            author: 'Admin',
            postImage: post2,
            authorImage: user1
        },
        {
            id: 6,
            title: 'Quantum Computing',
            category: 'Technology',
            date: 'Oct 1, 2023',
            author: 'Admin',
            postImage: post1,
            authorImage: user1
        }
    ];

    // State to track the current post index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Determine how many posts should be shown at once based on screen size
    const postsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

    const goToNext = () => {
        if (currentIndex < posts.length - postsPerPage) {
            setCurrentIndex((prevIndex) => prevIndex + 1);  // Move to the next post only if not at the last fully visible post
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);  // Move to the previous post only if not at the first post
        }
    };

    return (
        <div className='pt-14 mt-36 bg-[rgb(231,236,240)] lg:mt-0 relative lg:pb-12 lg:pr-9'>
            <div className='pl-4 lg:pl-32'>
                <h6 className='text-[#0066FF] text-[13px] mb-2'>PORTFOLIO</h6>
                <h2 className='text-[25px] tracking-wider mb-3'>
                    <b>Latest Posts</b><br className='lg:hidden' />
                    <span className='font-normal'>From Our Team</span>
                </h2>
            </div>

            {/* Carousel Container */}
            <div className='relative flex justify-center items-center lg:mx-20'>

                {/* Left Arrow */}
                <button onClick={goToPrevious} className='absolute left-8 lg:left-4 z-10' disabled={currentIndex === 0}>
                    <AiOutlineLeft className={`text-[30px] bg-blue-500 text-[#FFFFFF] hover:text-black transition-all duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} />
                </button>

                {/* Posts Display */}
                <div className='flex overflow-hidden w-full justify-center px-4 lg:flex lg:justify-center lg:gap-32'>
                    <div className='flex transition-transform duration-300 ease-in-out'
                         style={{ transform: `translateX(-${currentIndex * (100 / postsPerPage)}%)` }}
                    >
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className='min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%] p-4'
                            >
                                <div className='relative h-[350px] w-full border-2 rounded-lg bg-black overflow-hidden rounded-[20px]'>
                                    <div className='h-full w-full'>
                                        <img src={post.postImage} className='h-full w-full object-cover  hover:transform hover:scale-125 hover:-rotate-12 transition duration-300 ease-in-out' alt="Post" />
                                    </div>
                                    <a href="#" className='text-[11px] absolute text-[#FFFFFF] left-6 top-6 px-4 py-2 rounded-lg' style={{
                                        background: "linear-gradient(60deg, rgba(0,102,255,1) 9%, rgba(4,158,253,1) 69%, rgba(0,102,255,1) 100%)"
                                    }}>{post.category}</a>
                                    <a href="#" className='text-[16px] absolute bottom-12 left-6 text-[#FFFFFF] font-bold'>{post.title}</a>
                                    <div className='flex absolute bottom-4 left-6 justify-start gap-2 items-center'>
                                        <img src={post.authorImage} className='rounded-full w-4 h-4' alt="Author" />
                                        <a href="#" className='text-[13px] text-[#FFFFFF]'>By {post.author}</a>
                                        <div className='flex gap-1 items-center pl-2 font-semibold'>
                                            <CiCalendar className='text-[#FFFFFF]' />
                                            <a className='text-[13px] text-[#FFFFFF]'>{post.date}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button onClick={goToNext} className='absolute right-8 lg:right-4 z-10' disabled={currentIndex >= posts.length - postsPerPage}>
                    <AiOutlineRight className={`text-[30px] bg-blue-500 text-[#FFFFFF] hover:text-black transition-all duration-300 ${currentIndex >= posts.length - postsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`} />
                </button>
            </div>
        </div>
    );
}

export default Posts;
