import './Info.styles.scss';

function Info() {
  return (
    <div id="project-info">
      <p>
        {'You can find the GitHub repository of this React application '}
        <a
          href="https://github.com/lamai6/random-quote-machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
export default Info;
