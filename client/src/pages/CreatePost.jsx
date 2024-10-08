// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { preview } from "../assets";
// import { getRandomPrompt } from "../utils";
// import { FormField, Loader } from "../components";

// const CreatePost = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     prompt: "",
//     photo: "",
//   });

//   const [generatingImg, setGeneratingImg] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Generating the Image using openAI api
//   const generateImage = async () => {
//     if (form.prompt) {
//       try {
//         setGeneratingImg(true);
//         const response = await fetch("http://localhost:8080/api/v1/dalle", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ prompt: form.prompt }),
//         });
//         const data = await response.json();
//         setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
//       } catch (error) {
//         alert(error);
//       } finally {
//         setGeneratingImg(false);
//       }
//     } else {
//       alert("Please enter the prompt");
//     }
//   };

//   // Store the image in db
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.prompt && form.photo) {
//       setLoading(true);
//       try {
//         const response = await fetch("http://localhost:8080/api/v1/post", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         });
//         await response.json();
//         navigate("/");
//       } catch (err) {
//         alert(err);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       alert("Please enter a prompt and generate an image");
//     }
//   };

//   // handle input changes in the form
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // generting random prompts
//   const handleSupriseMe = () => {
//     const randomPrompt = getRandomPrompt(form.prompt);
//     setForm({ ...form, prompt: randomPrompt });
//   };

  
//   return (
//     <section className="max-w-7xl mx-auto">
//       <div>
//         <h1 className="font-extrabold text-[#222328 text-[32px]">Create</h1>
//         <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
//           Create imaginative and visually stunning images through DALL-E AI and
//           share them with the community
//         </p>
//       </div>

//       <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-5">
//           <FormField
//             LabelName="Your name"
//             type="text"
//             name="name"
//             placeholder="John Doe"
//             value={form.name}
//             handleChange={handleChange}
//           />
//           <FormField
//             LabelName="Prompt"
//             type="text"
//             name="prompt"
//             placeholder="A plush toy robot sitting against a yellow wall"
//             value={form.prompt}
//             handleChange={handleChange}
//             isSurpriseMe
//             handleSupriseMe={handleSupriseMe}
//           />

//           <div className="relative bg-grey-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center item-center">
//             {form.photo ? (
//               <img
//                 src={form.photo}
//                 alt={form.prompt}
//                 className="w-full h-full object-contain"
//               />
//             ) : (
//               <img
//                 src={preview}
//                 alt="preview"
//                 className="w-9/12 h-9/12 object-contain opacity-50"
//               />
//             )}

//             {generatingImg && (
//               <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
//                 <Loader />
//               </div>
//             )}
//           </div>

//         </div>

//         <div className="mt-5 flex gap-5">
//           <button
//             type="button"
//             onClick={generateImage}
//             className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//           >
//             {generatingImg ? "Generating..." : "Generate"}
//           </button>
//         </div>

//         <div className="mt-10">
//           <p className="mt-2 text-[#666e75] text-[14px]">
//             Once you have created the image you want, you can share it with
//             others in the community
//           </p>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//           >
//             {loading ? "Sharing..." : "Share with the community"}
//           </button>
//         </div>

//       </form>
//     </section>
//   );
// };

// export default CreatePost;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter the prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        await response.json();
        navigate("/");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSupriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form and Inputs Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Create Your Post</h1>
          <p className="text-gray-600 text-lg mb-8">
            Craft visually stunning images with DALL-E AI and share them with our community.
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <FormField
                LabelName="Your Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                handleChange={handleChange}
              />
              <FormField
                LabelName="Prompt"
                type="text"
                name="prompt"
                placeholder="Describe the image you want"
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSupriseMe={handleSupriseMe}
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={generateImage}
                className="bg-gray-300 text-gray-800 font-medium rounded-md px-6 py-3 shadow-md hover:bg-gray-200 transition-colors"
              >
                {generatingImg ? "Generating..." : "Generate Image"}
              </button>
              <button
                type="submit"
                className="bg-gray-300 text-gray-800 font-medium rounded-md px-6 py-3 shadow-md hover:bg-gray-200 transition-colors"
              >
                {loading ? "Sharing..." : "Share with Community"}
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            Once you've created your image, you can share it with the community for everyone to see.
          </p>
        </div>

        {/* Image Preview Section */}
        <div className="flex-none w-full md:w-1/2 flex flex-col items-center">
          <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md w-full h-full max-h-[500px] max-w-[500px] flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-8/12 mx-auto opacity-50"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;

