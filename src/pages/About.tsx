export default function About() {
  return (
    <section>
      <h1 className="heading py-10 rose">Irina Tsoi</h1>
      <p className="rose text-2xl py-4">Contact me:</p>
      <table className="table-fixed">
        <tr>
          <td className="pr-4 text-left">Email</td>
          <td>
            <a
              href="mailto:irinatsoi312@gmail.com"
              className="text-left text-lg"
            >
              irinatsoi312@gmail.com
            </a>
          </td>
        </tr>
        <tr>
          <td className="pr-4 text-left">Github:</td>
          <td>
            <a
              href="https://github.com/IrinaTsoi312?tab=repositories"
              className="text-left text-lg"
            >
              IrinaTsoi312
            </a>
          </td>
        </tr>
        <tr>
          <td className="pr-4 text-left">Telegram:</td>
          <td>
            <a href="https://t.me/IrinaT312" className="text-left text-lg">
              @IrinaT312
            </a>
          </td>
        </tr>
      </table>
      <h2 className="subheading pt-12 pb-4 cyan">Let Me Introduce Myself...</h2>
      <p className="text-xl py-4">
        I am enthusiastic and detail-oriented front-end developer with a passion
        for crafting visually appealing and user-friendly websites.
      </p>
      <p className="text-xl py-4">
        Proficient in HTML, CSS, and JavaScript, I am dedicated to creating
        seamless user experiences.
      </p>
      <p className="text-xl py-4">
        Strong problem-solving skills and a commitment to continuous learning
        drive my pursuit of excellence in web development.
      </p>
    </section>
  );
}
