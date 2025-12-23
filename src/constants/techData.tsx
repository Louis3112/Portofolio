  // BACKEND
import HapiImg from "../assets/techstack/backend/hapi.png";
import LaravelImg from "../assets/techstack/backend/laravel.png";
import MySqlImg from "../assets/techstack/backend/mySQL.png";      
import NodeImg from "../assets/techstack/backend/node.png";       
import PostgresImg from "../assets/techstack/backend/postgreSQL.png"; 
import RabbitMqImg from "../assets/techstack/backend/rabbitMQ.png";  
import RedisImg from "../assets/techstack/backend/redis.png";
import SwaggerImg from "../assets/techstack/backend/swagger.png";

// FRONTEND
import AxiosImg from "../assets/techstack/frontend/axios.png";
import BootstrapImg from "../assets/techstack/frontend/bootstrap.png";
import CssImg from "../assets/techstack/frontend/css.png";
import ElementorImg from "../assets/techstack/frontend/elementor.png";
import EslintImg from "../assets/techstack/frontend/eslint.png";     
import HtmlImg from "../assets/techstack/frontend/html.png";
import ReactRouterImg from "../assets/techstack/frontend/react-router.png";
import ReactImg from "../assets/techstack/frontend/react.png";
import ShadCnImg from "../assets/techstack/frontend/shadCN.png";       
import TailwindImg from "../assets/techstack/frontend/tailwind.png"; 
import ViteImg from "../assets/techstack/frontend/vite.png";
import WordpressImg from "../assets/techstack/frontend/wordPress.png"; 

// OTHERS
import AwsImg from "../assets/techstack/others/aws.png";
import FigmaImg from "../assets/techstack/others/figma.png";
import GeminiImg from "../assets/techstack/others/gemini.png";
import GitImg from "../assets/techstack/others/git.png";
import GithubImg from "../assets/techstack/others/github.png";
import GoogleCloudImg from "../assets/techstack/others/google-cloud.png"
import NotionImg from "../assets/techstack/others/notion.png";
import ObsidianImg from "../assets/techstack/others/obsidian.png";
import PhotoshopImg from "../assets/techstack/others/photoshop.png";
import PostmanImg from "../assets/techstack/others/postman.png";
import VercelImg from "../assets/techstack/others/vercel.png";
import VisilyImg from "../assets/techstack/others/visily.png";
import VsCodeImg from "../assets/techstack/others/vscode.png";

// PROGRAMMING
import CppImg from "../assets/techstack/programming/cpp.png";
import JavaImg from "../assets/techstack/programming/java.png";
import JavascriptImg from "../assets/techstack/programming/javascript.png";
import PythonImg from "../assets/techstack/programming/python.png";
import TypescriptImg from "../assets/techstack/programming/typescript.png";

const TECH_STACK_DATA = [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", src: CppImg, isImage: true },
        { name: "Java", src: JavaImg, isImage: true },
        { name: "JavaScript", src: JavascriptImg, isImage: true },
        { name: "Python", src: PythonImg, isImage: true },
        { name: "Typescript", src: TypescriptImg, isImage: true },
      ]
    },
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", src: HtmlImg, isImage: true },
        { name: "CSS3", src: CssImg, isImage: true },
        { name: "React", src: ReactImg, isImage: true },
        { name: "React Router", src: ReactRouterImg, isImage: true },
        { name: "Vite", src: ViteImg, isImage: true },
        { name: "Tailwind CSS", src: TailwindImg, isImage: true },
        { name: "Bootstrap", src: BootstrapImg, isImage: true },
        { name: "ShadCN UI", src: ShadCnImg, isImage: true },
        { name: "Axios", src: AxiosImg, isImage: true },
        { name: "WordPress", src: WordpressImg, isImage: true },
        { name: "Elementor", src: ElementorImg, isImage: true },
        { name: "ESLint", src: EslintImg, isImage: true },
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", src: NodeImg, isImage: true },
        { name: "Hapi.js", src: HapiImg, isImage: true },
        { name: "Laravel", src: LaravelImg, isImage: true },
        { name: "PostgreSQL", src: PostgresImg, isImage: true },
        { name: "MySQL", src: MySqlImg, isImage: true },
        { name: "Redis", src: RedisImg, isImage: true },
        { name: "RabbitMQ", src: RabbitMqImg, isImage: true },
        { name: "Swagger", src: SwaggerImg, isImage: true },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", src: GitImg, isImage: true },
        { name: "GitHub", src: GithubImg, isImage: true },
        { name: "VS Code", src: VsCodeImg, isImage: true },
        { name: "Postman", src: PostmanImg, isImage: true },
        { name: "AWS", src: AwsImg, isImage: true },
        { name: "Google Cloud", src: GoogleCloudImg, isImage: true },
        { name: "Vercel", src: VercelImg, isImage: true },
        { name: "Figma", src: FigmaImg, isImage: true },
        { name: "Photoshop", src: PhotoshopImg, isImage: true },
        { name: "Visily", src: VisilyImg, isImage: true },
        { name: "Notion", src: NotionImg, isImage: true },
        { name: "Obsidian", src: ObsidianImg, isImage: true },
        { name: "Gemini AI", src: GeminiImg, isImage: true },
      ]
    },
  ];

export default TECH_STACK_DATA;