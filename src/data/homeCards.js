const cardData = [
  {
    title: "Memory Games",
    text: (
      <p>
        Here's a collection of memory games that I made (excluding Sequences)
        with JavaScript and React. My motivation is that Alzheimer's runs in my
        family. This is my attempt at combatting it. I intend on releasing a
        mobile app soon!
      </p>
    ),
    link: "https://wubaboo.github.io/memory-games",
    image: (
      <i
        className="fa-solid fa-brain"
        style={{ color: "#e486b8", fontSize: "2rem" }}
      ></i>
    ),
  },
  {
    title: "ytSheetMusic",
    text: (
      <p>
        <b>ytSheetMusic</b> is a tool I made to extract sheet music from YouTube
        videos containing sheet music. It extracts the sheets music portions
        from the videos, and concatenates the results in a PDF file.
        <br />
        It's made with Python, JavaScript, Flask, React, and AWS.
      </p>
    ),
    link: "https://wubaboo.github.io/ytSheetMusicFront",
    image: <i className="fa-solid fa-music" style={{ fontSize: "2rem" }}></i>,
  },
  {
    title: "Ambigrams",
    text: (
      <p>
        <b>Ambigram</b>: a calligraphic design that can be viewed from multiple
        perspectives <br />I encountered Ambigrams reading
        <i> Gödel, Escher, Bach: an Eternal Golden Braid</i> by Douglas
        Hofstadter and I wanted to try making my own!
      </p>
    ),
    path: "ambigrams/",
    image: (
      <i
        className="fa-solid fa-palette"
        style={{ color: "#78a1e8", fontSize: "2rem" }}
      ></i>
    ),
  },
];

export default cardData;
