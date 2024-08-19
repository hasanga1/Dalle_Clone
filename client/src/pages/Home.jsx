import { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => (
      <Card key={post.id} {...post} className="shadow-lg rounded-lg overflow-hidden" />
    ));
  }

  return (
    <h2 className="mt-5 font-bold text-gray-500 text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Fetching all Images from the db
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) =>
          item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(searchResults);
      }, 500)
    );
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4">
        {/* Hero paragraph */}
        <div className="text-center mt-20">
          <h1 className="font-extrabold text-gray-900 text-[40px] md:text-[48px]">
            Discover Your Creative Potential
          </h1>
          <p className="mt-4 text-gray-600 text-[18px] max-w-[600px] mx-auto">
            Explore a world of AI-generated imagery, where your imagination is the only limit.
          </p>
        </div>

        {/* Search Images */}
        <div className="mt-16">
          <FormField
            LabelName={"Search posts"}
            type={"text"}
            name={"text"}
            placeholder={"Search Posts"}
            value={searchText}
            handleChange={handleSearchChange}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Recently Generated Images */}
        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className="font-medium text-gray-600 text-xl mb-3">
                  Showing results for{" "}
                  <span className="text-gray-900 font-semibold">{searchText}</span>
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6">
                {searchText ? (
                  <RenderCards
                    data={searchResults}
                    title="No search results found"
                  />
                ) : (
                  <RenderCards data={allPosts} title="No posts found" />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
