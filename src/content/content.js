import images from "../images/workPhotos"
const NLFCopy = {
  ContactDetails: {
    email: "n_fage@icloud.com",
    phone: "+447976183602",
  },
  BlogBox: {
    image:
      "https://www.homeserve.com/uk/living/wp-content/uploads/2019/10/boiler-service-checklist.jpg",
    headline: "Ask about a boiler health check today",
    link: "blog",
    altText: "boiler being checked",
  },
  Box1: {
    title: "Who we are",
    content:
      "NLF Plumbing and Heating is a plumbing business based in Moseley, Birmingham.  Nathan has over 20 years experience in the industry, working in both domestic and commercial sectors.  We pride ourselves in providing a prompt, reliable and friendly service at competitive rates.",

    expanded: [
      "I left school to complete a four year apprenticeship and since then I have worked in a range of settings, including large building sites producing new build properties, 24 hour callout companies and alongside individual contractors working within homes.",
      "I have a young family so I understand the need for a warm house and hot water!  Efficiency and honesty is key when I’m invited into your property.  I can guarantee a fair quote, free of charge and good communication.",
      "I am GAS SAFE registered, which means I am legally permitted to work on gas.",
    ],
    images: {
      image1: images[0].thumbnail,
      image2: images[1].thumbnail,
      image3: images[2].thumbnail,
    },
    link: "about",
  },
  Box2: {
    title: "Our work",
    gallery: {},
    expanded: "",
    link: "gallery",
  },
  Box3: {
    title: "What we do",

    content1:
      "All aspects of domestic plumbing, heating and gas work, for example:",
    content2: [
      "Bathrooms",
      "En-suites",
      "Drainage problems",
      "Emergency call out",
    ],
    content3: [
      "Boiler services",
      "Landlord safety checks",
      "Gas cookers",
      "Boiler upgrades",
      "Central heating system upgrades",
      "Underfloor heating",
    ],

    expanded: "",
    link: "services",
  },
  Box4: {
    title: "Reviews",
    reviews: [
      {
        originalTitle:
          '"Very impressed with the service provided, always very prompt and provides great service.  we have used NLF for a few jobs and would certainly recommend to others."',
        reviewer: "Gemma, Moseley",
      },

      {
        originalTitle:
          '"Nathan has done various bits of work for us, all to a very high standard and a lovely guy.  Recommend."',
        reviewer: "Ben, Moseley",
      },

      {
        originalTitle:
          '"NLF was very professional and helpful from booking the job, to completion.  I wouldn’t hesitate to recommend and I will be using them again for future work."',
        reviewer:
          "Patrick Collins, Managing Director, Collins Building Partnership Ltd",
      },
    ],

    expanded: "",
    link: "reviews",
  },
}

export default NLFCopy
