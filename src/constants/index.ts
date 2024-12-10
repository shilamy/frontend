import { Group } from "@/types";
import { facebook, instagram, linkedin, twitter  } from "../assets";


export const navLinks = [
    {
      id: "home",
      title: "Home",
      url: "/",
    },
    {
      id: "studyplan",
      title: "StudyPlan",
      url: "/studys",
    },
    {
      id: "resources",
      title: "Resources",
      url: "/resources",
    },
    {
      id: "group",
      title: "Group",
      url: "/groups",
    },
  ];
  

export const mockQuestions = [
  {
    id: 1,
    title: "How do I solve quadratic equations?",
    content: "I'm struggling with quadratic equations. Can someone explain the steps to solve them?",
    author: "Math Newbie",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Math"
  },
  {
    id: 2,
    title: "What's the difference between mitosis and meiosis?",
    content: "I always mix up mitosis and meiosis. Can someone explain the key differences?",
    author: "Biology Student",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Biology"
  },
  {
    id: 3,
    title: "How to structure an essay?",
    content: "I need help understanding how to structure an academic essay. Any tips?",
    author: "Essay Writer",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Essay"
  }
];

export const groups: Group[] = [
  {
    id: "1",
    name: "Team Alpha",
    description: "For students interested in mathematics and economics...",
    memberCount: 2,
    isMember: true,
    avatar: "/placeholder.svg",
    members: [
      { avatar: "/placeholder.svg", name: "Member 1" },
      { avatar: "/placeholder.svg", name: "Member 2" }
    ]
  },
  {
    id: "2",
    name: "Accounting students",
    description: "For students interested in Accounting and Finance",
    memberCount: 7,
    isMember: false,
    avatar: "/placeholder.svg",
    members: [
      { avatar: "/placeholder.svg", name: "Member 1" },
      { avatar: "/placeholder.svg", name: "Member 2" },
      { avatar: "/placeholder.svg", name: "Member 3" }
    ]
  },
  {
    id: "3",
    name: "Physics",
    description: "For physics enthusiasts and learners",
    memberCount: 2,
    isMember: false,
    avatar: "/placeholder.svg",
    members: [
      { avatar: "/placeholder.svg", name: "Member 1" },
      { avatar: "/placeholder.svg", name: "Member 2" }
    ]
  },
  {
    id: "4",
    name: "General studies",
    description: "For students interested in all subjects",
    memberCount: 1,
    isMember: false,
    avatar: "/placeholder.svg",
    members: [
      { avatar: "/placeholder.svg", name: "Member 1" }
    ]
  }
];


  
export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "",
        },
        {
          name: "How it Works",
          link: "",
        },
        {
          name: "Create",
          link: "",
        },
        {
          name: "Explore",
          link: "",
        },
        {
          name: "Terms & Services",
          link: "",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "",
        },
        {
          name: "Partners",
          link: "",
        },
        {
          name: "Suggestions",
          link: "",
        },
        {
          name: "Blog",
          link: "",
        },
        {
          name: "Newsletters",
          link: "",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "",
        },
        {
          name: "Become a Partner",
          link: "",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];