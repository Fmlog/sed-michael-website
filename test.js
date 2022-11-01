const projects = [
  {
    name: "Animated Explainer Videos",
    title: "Animation",
    desc: "Make eye-catching explainer videos for your business or product. Let's make a video that matches the tone and style of your brand.",
    longDesc:
      "Test description to play with data UI integration.Test description to play with data UI integration.Test description to play with data UI integration.",
    video:
      "https://www.youtube-nocookie.com/embed/ucP-aJ444jE?autoplay=1&mute=1&loop=1&rel=0&controls=0&enablejsapi=1",
    photo: "/test.svg",
    images: [
      {
        url: "https://images.pexels.com/photos/962000/pexels-photo-962000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
  {
    name: "Web Development",
    title: "Development",
    desc: "Create fun and engaging responsive websites. We guarantee that your websites also functions well in search engines.",
    longDesc:
      "Test description to play with data UI integration.Test description to play with data UI integration.Test description to play with data UI integration.",

    photo: "web-design.svg",
    images: [
      {
        url: "https://images.pexels.com/photos/962000/pexels-photo-962000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
  {
    name: "Graphic Design",
    title: "Design",
    desc: "From UI design to logo design, we provide end-to-end design services. Whatever your design needs are, we can meet meet them.",
    longDesc:
      "Test description to play with data UI integration.Test description to play with data UI integration.Test description to play with data UI integration.",
    photo: "graphic-design.svg",
    images: [
      {
        url: "https://images.pexels.com/photos/962000/pexels-photo-962000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        url: "https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
];

const result = projects.filter((obj) => {
  return obj.title === "Development";
}) [0];
const result2 = projects.find(x => x.name === "Graphic%20Design");

console.log(result);
//console.log(result2.name);
const staff = people.find((x) => x.id === Number(person));

{staff == undefined ? (
  <section>
    <h1>Loading...</h1>
  </section>
) : (