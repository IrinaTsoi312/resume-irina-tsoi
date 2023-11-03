import RSSCertificate from '../assets/RSS_FE-JS_Q12023_Certificate.png';

export default function Edu() {
  return (
    <section>
      <h2 className="subheading rose pb-10">
        Besides constant self-learning and practice these courses helped me to
        build my tech stack and gain experience of working in a teams:
      </h2>
      <div className="rss">
        <a href="https://app.rs.school/certificate/dolm2nvw">
          <span className="course-title">
            The Rolling Scopes School Front-end/Javascript course Q12023
          </span>
          <img src={RSSCertificate} alt="certificate" />
        </a>
      </div>
    </section>
  );
}
