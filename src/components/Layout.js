import Navbar from "./navbar";
import About from "./About";
import Education from "./Education";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Certifications from "./Certifications";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4">
        {children}
        <About />
        <Education />
        <Resume />
        <Certifications/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
