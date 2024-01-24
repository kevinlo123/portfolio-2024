import { db } from '@vercel/postgres';
import BlurImage from '../../components/BlurImage'


const client = await db.connect();

export default async function ProjectsTemplate ({ params }) {

  const project = await client.sql`SELECT * FROM projects WHERE link = ${params.slug};`;
  const imageURL = new TextDecoder().decode(project.rows[0].image);

  return (
    <main className="my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
      <section className="flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]">
        <div className="lg:w-1/3  flex flex-col gap-[20px]">
          <h2 className="text-white project-name leading-[100%] font-medium text-[80px]">
            {project.rows[0].name}
          </h2>
          <div className="flex items-center flex-wrap gap-[6px] group">
            {project.rows[0].languages_used.map((project) => (
              <span key={project} className="tag-primary rounded-full border border-white text-white uppercase px-3">
                {project}
              </span>
            ))}
          </div>
          <p className="text-white project-desc">
            {project.rows[0].description}
          </p>
        </div>
        <div className="flex flex-col gap-[30px] lg:w-1/2 h-full ml-auto">
          <BlurImage className="object-contain rounded-xl" image={imageURL} />
        </div>
      </section>
      <a className="flex items-center justify-center gap-4 text-white mt-[100px] lg:mt-[200px]" href="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L8 16M5 12L19 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
        Go back to home page
      </a>
    </main>
  )
}