import { Container } from "./styles";
import ProjectCard from "../PortfolioItem/PortfolioItem";
import ScrollAnimation from "react-animate-on-scroll";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">
        <ProjectCard
          projectLink="https://input.rs/"
          name="Input.rs"
          description="A corporate webiste where i worked on making all the pages, following the norm that Laravel suggests, and working closely with a backend developer to integrate everything correctly with the admin portion of the website"
          techList={["Laravel", "Bootstrap", "Git", "Azure"]}
        />
        <ProjectCard
          projectLink="https://hrm-kongres.rs/"
          name="Hrm Congress"
          description="A Figma-designed landing page can be converted to HTML/CSS and integrated with a Laravel backend to create a reusable template for building congress sites. The Laravel project will involve setting up routes and controllers, integrating the HTML/CSS code, adding dynamic content, testing, and deployment."
          techList={["Laravel", "Figma", "Git", "Azure"]}
        />
        <ProjectCard
          projectLink="https://optotehnik.com/"
          name="Optotehnik App Landing"
          description="A modern landing page for an app designed to showcase its features, pricing, and download links in multiple languages. This was achieved by implementing a multi-language system and using a framework such as Laravel to build the landing page."
          techList={["Laravel", "Bootstrap", "Git", "Azure"]}
        />
        <ProjectCard
          projectLink="https://play.google.com/store/apps/details?id=com.hakler95.optotehnik"
          name="Optotehnik App"
          description="A React Native app, designed in Figma, has been developed for companies to track the return policy process and manage inventory in storage units. While the code cannot be shared as it is not owned by me, the app provides a useful tool for businesses to streamline their operations and improve customer satisfaction."
          techList={["React Native", "Figma", "Git", "Azure"]}
        />
        <ProjectCard
          projectLink="https://gpt3-21buil6nc-milanche032s-projects.vercel.app/"
          githubLink="https://github.com/milanche032/gpt3/tree/main/"
          name="GPT-3 Landing page"
          description="Crafted with attention to detail, a Modern and Minimal Landing Page is designed in Figma and fully customizable. Its usable across multiple devices with its sleek and contemporary aesthetics. Whether viewed on desktop, tablet, or mobile the page is readable and responsive"
          techList={["React", "Figma", "Git"]}
        />
        <ProjectCard
          projectLink="https://netflix-clone-ql8n4ufso-milanche032.vercel.app/"
          githubLink="https://github.com/milanche032/netflix-clone/tree/main"
          name="Netflix clone"
          description="A simple netflix clone made to practice tailwind css, react, axios and firebase auth, has a functional login signup, and home page"
          techList={["React", "Tailwind", "Axios", "Firebase"]}
        />
        
        <ProjectCard
          projectLink="https://4-m.ch/"
          name="4m.ch"
          description="Custom theme multilanguage, wordpress website made to match the customers wishes and ideas down to the smallest details. Pages are made with templates, and design was from photoshop. "
          techList={["Wordpress", "PHP", "Yoast", "Polylang"]}
        />
        <ProjectCard
          projectLink="#"
          name="Nemanjici"
          description="Custom theme multilanguage and transliteral, wordpress website with custom post types, and custom fields. Pages are made with templates, and design was from photoshop. "
          techList={["Wordpress", "ACF", "Custom post types", "Yoast"]}
        />
        <ScrollAnimation animateIn="flipInX">
          <div className="wordps">
            <div className="project dummy bg1">
             
            </div>
            <div className="project dummy bg2">
              
            </div>
            <div className="project main">
              <header>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.52 122.523"
                  width="50px "
                >
                  <g fill="#21759b">
                    <path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z" />
                    <path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z" />
                    <path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z" />
                    <path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z" />
                    <path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z" />
                  </g>
                </svg>
              </header>
              <div className="body">
                <h3>Paid theme wordpress websites</h3>
                <p>
                  <span>60+ websites</span>
                  <br />
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Woocomerce</li>
                  <li>Yoast</li>
                  <li>Polylang</li>
                  <li>WPML</li>
                  <li>CF7</li>
                  <li>Site optimization plugins</li>
                </ul>
              </footer>
            </div>
          </div>
        </ScrollAnimation>  
      </div>
      <p className="more-projects">And many more...</p>
    </Container>
  );
}
