import axios from "axios";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

const exception = ["safalgautam22", "vscode_customization", "heliosis", "Cpp"];

const Card = ({ repo }) => {
  return (
    <div className="bg-[#110b0370] rounded-2xl shadow-lg p-6 mb-10 h-80 flex flex-col w-[90%] justify-around hover:-translate-y-3 hover:scale-110">
      <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
      <p className="text-gray-300 text-base mb-4 r">
        {repo.description || "No description provided."}
      </p>
      <div className="text-sm">
        <span>Stack : </span>
        {repo.language || "N/A"}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--primary) text-sm font-semibold hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export const Project = () => {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/safalgautam22/repos",
        );

        const filteredRepos = response.data.filter(
          (repo) => !exception.includes(repo.name),
        );

        const sortedRepos = filteredRepos.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
        );

        setRepos(sortedRepos);
      } catch (err) {
        console.error("Failed to load repositories", err);
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  return (
    <section>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <span className="italic text-gray-500">
          Projects built with passion, precision, and a learner’s mindset.
        </span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-96">
          <div className="bg-[#110b0370] rounded-3xl p-4 flex items-center justify-center">
            <RingLoader color="#ff5000" size={40} />
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-around justify-items-center">
            {repos.slice(0, visibleCount).map((repo) => (
              <Card key={repo.id} repo={repo} />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-(--primary) p-2 w-35 h-10 text-xl rounded-full hover:bg-amber-800 font-semibold"
              onClick={() => {
                if (visibleCount >= repos.length) {
                  setVisibleCount(2);
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({
                    behavior: "instant",
                  });
                } else {
                  setVisibleCount(visibleCount + 2);
                }
              }}
            >
              {visibleCount < repos.length ? "See More ▼" : "See Less ▲"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
