DROP TABLE projects;

CREATE TABLE projects (
	project_id serial PRIMARY KEY,
    languages_used text[],
	name VARCHAR ( 255 ),
    description VARCHAR,
    image bytea,
    live_link VARCHAR(255)
	created_on TIMESTAMP NOT NULL,
);


INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (1, ARRAY ['Next.js','Styled Components', 'Acoustic content (CMS)', 'React', 'JavaScript'], 'Acoustic', 'I was part of the development team that built Acoustic.com during my time at Genuine Interactive in 2020. Acoustic is a marketing technology company that provides a suite of solutions to help businesses with their marketing efforts. As of my last knowledge update in January 2022, Acoustic offers a range of tools and services for marketing automation, customer analytics, and personalized marketing campaigns.', '/acoustic.png', 'https://acoustic.com', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (2, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Twig Templating'], 'Baxter', 'I was part of the development team that built Acoustic.com during my time at Genuine Interactive in 2019. Baxter International Inc., known as Baxter Healthcare, is an American multinational healthcare company specializing in the development and manufacturing of medical products. They offer a diverse range of products, including intravenous solutions, infusion systems, dialysis products, and pharmaceuticals. Baxter is a significant player in the dialysis industry and provides essential medical solutions for patients worldwide.', '/baxter.png', 'https://baxter.com', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (3, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Jquery', 'Twig Templating', 'Google Maps API'], 'CityMD', 'I lead the Front end Development of citymd in 2021-2022 while I was working at Rauxa. CityMD is a rapidly expanding urgent care provider in the United States, offering accessible and convenient medical services. With numerous locations, CityMD provides walk-in care for a variety of non-emergency medical issues, including illnesses, injuries, and routine check-ups. The company focuses on delivering timely and comprehensive healthcare services to patients in urban and suburban areas.', '/citymd.png', 'https://citymd.com', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (4, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Twig Templating', 'React.js'], 'GoRving', 'I was part of the development team that built GoRving.com during my time at Genuine Interactive in 2020. GoRVing is a marketing and information campaign promoting recreational vehicle (RV) travel and lifestyle in the United States. The campaign is supported by the RV industry and aims to inspire and educate people about the benefits of RV travel. GoRVing provides resources, travel tips, and information to help individuals and families explore the freedom and flexibility of RV adventures.', '/gorving.png', 'https://gorving.com', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (5, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Twig Templating', 'Vue.js'], 'MassGeneral Hospital', 'I was part of the development team that built MassGeneral Hospitals website during my time at Genuine Interactive in 2020. This was a project my team worked on with another agency. Massachusetts General Hospital, based in Boston and founded in 1811, is a prominent teaching hospital affiliated with Harvard Medical School. Renowned for patient care, medical research, and innovation, it plays a crucial role in healthcare education and advancements.', '/massgeneral.png', 'https://massgeneral.org', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (6, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Jquery', 'Twig Templating'], 'MassMutual', 'I played more of a maintenance and support role where I added widgets and features to Massmutuals website in 2019. MassMutual is a Massachusetts-based financial services and insurance company founded in 1851. Specializing in life insurance, retirement planning, and investments, it operates as a mutual company owned by policyholders. Known for community involvement, MassMutual is a prominent player in the financial services industry. Check their official website for the latest information.', '/massmutual.png', 'https://massmutual.com', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (7, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Twig Templating'], 'Mintz', 'I was part of the development team that built Mintz.com during my time at Genuine Interactive in 2019. Mintz is a Boston-based law firm with a national and international presence, offering legal services in areas such as corporate law, litigation, intellectual property, and regulatory compliance. The firm caters to clients across diverse industries, providing comprehensive legal expertise and counsel. For the latest information, it is advisable to refer to Mintz official website or recent sources.', '/mintz.png', 'https://mintz.com', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (8, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Twig Templating'], 'Evolve NYPA', 'I was the Lead Front End Developer on New York Power Authoritys Evolve project in 2021. The New York Power Authority (NYPA) is a state-owned public power organization responsible for managing and operating various power generation and transmission facilities in the state of New York. Established in 1931, NYPA plays a key role in supplying electricity to government facilities, public institutions, and businesses across the state. The authority is involved in the generation of hydroelectric power, as well as other clean energy initiatives, contributing to New Yorks efforts in sustainable and reliable energy production. ', '/nypa.png', 'https://evolveny.nypa.gov', current_timestamp);

INSERT INTO projects(project_id, languages_used, name, description, image,live_link, created_on)
VALUES (9, ARRAY ['HTML','SCSS', 'JavaScript', 'Gulp.js', 'Twig Templating', 'React.js', 'Google Maps API'], 'Terminix', 'I was part of the development team that built Terminixs website during my time at Genuine Interactive in 2020 - 2021. Terminix is a leading pest control company offering services for residential and commercial customers. Specializing in pest removal and prevention, it is recognized for its national presence and expertise in addressing various pest issues.', '/terminix.png', 'https://terminix.com', current_timestamp);