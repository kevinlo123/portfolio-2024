import { db } from '@vercel/postgres';
import Link from 'next/link';
import BlurImage from '../../components/BlurImage';
import AnimatedText from '../../components/AnimatedText';

const client = await db.connect();

export default async function ProjectsTemplate ({ params }) {

  const currentPage = params.slug;
  const project = await client.sql`SELECT * FROM projects WHERE link = ${currentPage};`;
  const imageURL = new TextDecoder().decode(project.rows[0].image);
  const projects = await client.sql`SELECT * FROM projects`;
  const projectLinks = []

  projects.rows.forEach((project) => {
    projectLinks.push(project.link)
  })

  let previousProject = projectLinks[projectLinks.indexOf(currentPage) - 1]
  let nextProject = projectLinks[projectLinks.indexOf(currentPage) + 1]

  const text = project.rows[0].name;

  return (
    <main className="project-detail my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
      <section className="flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/3  flex flex-col gap-[20px]">
          <h1 className="project-name leading-[100%] font-medium text-[55px] lg:text-[80px]">
            <AnimatedText text={text} />
          </h1>
          <div className="flex items-center flex-wrap gap-[6px] group">
            {project.rows[0].languages_used.map((project) => (
              <span key={project} className="tech-used tag-primary rounded-full border uppercase px-3">
                {project}
              </span>
            ))}
          </div>
          <p className="project-desc">
            {project.rows[0].description}
          </p>
          <a className="flex items-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10" href={project.rows[0].live_link} target="_blank">
            Go to website <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Arrow / Arrow_Up_Right_LG"><path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
          </a>
        </div>
        <div className="flex flex-col gap-[30px] lg:w-1/2 h-full lg:ml-auto">
          <BlurImage className="object-contain rounded-xl" image={imageURL} />
        </div>
      </section>
      <div className="flex flex-row items-center justify-between lg:justify-center mt-20">
        { previousProject === undefined ? 
        ''
          :
          <Link className="flex gap-4 mr-5" href={`/projects/${previousProject}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
            Previous
          </Link>
        }
        { nextProject === undefined ? 
        ''
          :
          <Link className="flex gap-4 flex-row-reverse ml-5" href={`/projects/${nextProject}`}>
            <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
            Next
          </Link>
        }
      </div>
      <Link className="flex items-center justify-center gap-4 mt-[100px]" href="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        Go back to home page
      </Link>
    </main>
  )
}