function Skills() {
  return (
    <section>
      <div className="skills__hard">
        <h2 className="subheading rose py-10">
          Here are the tech stack I have been working with:
        </h2>
        <ul className="list-none flex justify-around">
          <li className="list-item">
            HTML5, CSS
            <li className="sublist-item cyan">SCSS</li>
            <li className="sublist-item cyan">Bootstrap</li>
            <li className="sublist-item cyan">Tailwind</li>
            <li className="sublist-item cyan">Material UI</li>
          </li>
          <li className="list-item">
            Javascript
            <li className="sublist-item cyan">ReactJS</li>
            <li className="sublist-item cyan">AngularJS</li>
            <li className="sublist-item cyan">Typescript</li>
          </li>
          <li className="list-item">
            Worked with templates in:
            <li className="sublist-item cyan">Figma</li>
            <li className="sublist-item cyan">Photoshop</li>
          </li>
        </ul>
      </div>
      <div className="skills__soft pt-12 pb-10">
        <h2 className="subheading rose">
          And here are the soft skills I have have experience with:
        </h2>
        <ul className="list-none">
          <li className="list-item">
            Working in a team
            <li className="sublist-item">
              Collaborated with designers, back-end developers and other
              stakeholders in one team.
            </li>
            <li className="sublist-item">
              Adaptability and learning agility to learn new technologies and
              skills.
            </li>
            <li className="sublist-item">
              Clear and effective communication is crucial for understanding
              project requirements, discussing ideas with team members, and
              providing updates on the progress.
            </li>
            <li className="sublist-item">
              Effective Documentation and Code Comments according to the
              Conventional Commits specification.
            </li>
          </li>
        </ul>
      </div>
      <div id="languages">
        <h2 className="subheading rose">Languages:</h2>
        <ul className="list-none flex">
          <li className="px-4">English - B2 level</li>
          <li className="px-4">Russian - Fluent</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
