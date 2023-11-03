const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        {/* Repeat this block for multiple projects */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4">Project Name</h3>
          <p>Description of the project.</p>
        </div>  
        {/* End of block */}
      </div>
    </section>
  );
}

export default Projects;