import cCourse from '../../images/cCourse.png';
import webCourse from '../../images/webCourse.jpg';
import designCourse from '../../images/designCourse.jpg';
import javaCourse from '../../images/javaCourse.jpg';
import jsCourse from '../../images/jsCourse.jpg';
import officeCourse from '../../images/officeCourse.png';
import phpCourse from '../../images/phpCourse.png';
import pythonCourse from '../../images/pythonCourse.png';
import reactCourse  from '../../images/reactCourse.png';
import cppCourse from '../../images/c++Course.png';
import cspCourse from '../../images/cspCourse.png';
import engCourse from '../../images/engCourse.jpg';
import apCourse from '../../images/a+Course.jpg';
import bsCourse from '../../images/bsCourse.jpg';
import hackCourse from '../../images/hackCourse.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle } from '@fortawesome/free-solid-svg-icons'

var courses = [
    {   
        "id": "01",
        "title": "C Programming For Beginners ",
        "description": " C Programming will increase career options. Become a better dev in other languages by learning C. Pointers explained",
        "price": 50,
        "img": cCourse
    },
    {   
        "id": "02",
        "title": "Beginning C++ Programming",
        "description": " Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills needed for game, system, and application development.",
        "price": 60,
        "img": cppCourse
    },
    {   
        "id": "03",
        "title": "C# Basics for Beginners: Learn C# Fundamentals by Coding",
        "description": "Master C# fundamentals in 6 hours - The most popular course with 50,000+ students, packed with tips and exercises!",
        "price": 122,
        "img": cspCourse
    },
    {   
        "id": "04",
        "title": "Java Programming for Complete Beginners ",
        "description": "Learn Java Programming with 200+ examples. For Java Beginners! Learn Java Object Oriented Programming Now!",
        "price": 199,
        "img": javaCourse
    },
    {   
        "id": "05",
        "title": "The Complete JavaScript Course 2020: Build Real Projects!",
        "description": "Master JavaScript with the most complete course! Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack",
        "price": 79,
        "img": jsCourse
    },
    {   
        "id": "06",
        "title": "PHP for Beginners - Become a PHP Master - CMS Project",
        "description": " PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.",
        "price": 102,
        "img": phpCourse
    },
    {   
        "id": "07",
        "title": "English for Beginners: Intensive Spoken English Course",
        "description": " English speaking course. 77 Hours of English language speaking, English listening practice. 1000 English language words",
        "price": 99,
        "img": engCourse
    },
    {   
        "id": "08",
        "title": "Graphic Design Bootcamp: Photoshop, Illustrator, InDesign ",
        "description": "Bestselling Beginner Course! Use Photoshop, Illustrator, & InDesign for logo design, web design, poster design, and more",
        "price": 100,
        "img": designCourse
    },
    {   
        "id": "09",
        "title": "MS Office; Excel, Word, Access & PowerPoint 2019 - Beginners ",
        "description": "Learn the essentials of Microsoft Office in this 4-course bundle for Office 365 or Office 2019 users.",
        "price": 75,
        "img": officeCourse
    },
    {   
        "id": "10",
        "title": "Learn Python Programming Masterclass ",
        "description": " This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
        "price": 144,
        "img": pythonCourse
    },
    {   
        "id": "11",
        "title": "React - The Complete Gue (incl Hooks, React Router, Redux) ",
        "description": "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
        "price": 99,
        "img": reactCourse
    },
    {   
        "id": "12",
        "title": "CompTIA A+ Certification (220-1001). ",
        "description": "Course 1: Everything you need to pass the A+ Certification Core 1 (220-1001) Exam, from Mike Meyers and Total Seminars.",
        "price": 185,
        "img": apCourse
    },
    {   
        "id": "13",
        "title": "Build Responsive Real World Websites with HTML5 and CSS3 ",
        "description": "The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.",
        "price": 165,
        "img": webCourse
    },
    {   
        "id": "14",
        "title": "Bootstrap 4 From Scratch With 5 Projects",
        "description": "Master Bootstrap 4 and build 5 real world themes while learning HTML5 semantics & CSS3",
        "price": 125,
        "img": bsCourse
    },
    {   
        "id": "15",
        "title": "Learn Ethical Hacking From Scratch ",
        "description": "Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.",
        "price": 139,  
        "img": hackCourse
    },
]

export default courses;