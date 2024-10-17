import { HeaderComponent } from '../components/HeaderComponent.js'
import { MonthComponent } from '../components/MonthComponent.js'
import { RecentBlogsComponent } from '../components/RecentBlogsComponent.js';
import { FooterComponent } from "../components/FooterComponent.js"
import { BlogPostComponent } from '../components/BlogPostComponent.js'
import { RecentPostsComponent } from '../components/RecentPostsComponent.js'
import { AboutMeHeroComponent } from '../components/AboutMeHeroComponent.js'

const blogDataSet = {
    date: "JULY 23, 2022",
    headline: "My new Journy as a bootcamp student",
    caption: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
    thumbnailCaption: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    sections: [
        {
            headline: "How I stay commited to learning",
            desc: "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects. While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        },
        {
            headline: "How I got started",
            desc: "I startedsimple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words. That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        }
    ],
    thumbnailImgsLocationArray: [
        "../images/blog-image-01.png",
        "../images/blog-image-02.png",
        "../images/blog-image-03.png",
        "../images/blog-image-04.png",
        "../images/blog-image-05.png",
        "../images/blog-image-06.png"
    ]
    
}

window.addEventListener("load", () => {
    if (window.location.href.includes('index')) {   
        const htmlComponentArray = [
            HeaderComponent(), 
            MonthComponent(blogDataSet.date, blogDataSet.headline, blogDataSet.caption), 
            RecentBlogsComponent(blogDataSet.date, blogDataSet.thumbnailCaption, blogDataSet.thumbnailImgsLocationArray), 
            FooterComponent()
        ]
        document.querySelector("body").innerHTML += htmlComponentArray.join("")
    } else if (window.location.href.includes('blog')) {
        const htmlComponentArray = [
            HeaderComponent(), 
            BlogPostComponent(), 
            RecentPostsComponent(), 
            RecentBlogsComponent(blogDataSet.date, blogDataSet.thumbnailCaption, blogDataSet.thumbnailImgsLocationArray, false, 'rp'), 
            FooterComponent()
        ]
        document.querySelector("body").innerHTML += htmlComponentArray.join("")
    } else if (window.location.href.includes('about')) {
        const htmlComponentArray = [
            HeaderComponent(), 
            AboutMeHeroComponent(), 
            RecentPostsComponent(), 
            RecentBlogsComponent(blogDataSet.date, blogDataSet.thumbnailCaption, blogDataSet.thumbnailImgsLocationArray, false, 'rp'), 
            FooterComponent()]
        document.querySelector("body").innerHTML += htmlComponentArray.join("")
    }
}); 