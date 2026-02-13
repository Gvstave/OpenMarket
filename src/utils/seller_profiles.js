const SELLER_PROFILES = [
  {
    id: 1,
    name: "Urban Threads",
    feedback: "98% Positive Feedback",
    location: "Brooklyn, NY",
    rating: 4.9,
    reviewCount: "1.2k",
    bannerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1BNT4YP-Eef42pKD11KF5yllZvMJDwDVvlex0XDbGgCylBo-qJNnEJEDIak6rG3Q7oWnr3ujapPcnrPCKLeoRpTV3Cc3BjjJYvrUnMBQZcfRMroS4L0-71C0hyll19suIQPwDmONj8j8TDGzj8NIk0XUlLNzO8_3s3O6d-rlRwomZ2M2W6DW5qW4pcLw77GFPgES88TF9R8Wn1S_8hNUg_vs5n12knw-EBarlvVJTjV6WZ3L5K-NGcMWixkIB0DlGtn83WO9Zsh0",
    logoImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClfVEdTn1XqN67uZAGPkXwEJef1qUiDy7UKsnSJREE1wVR-4xkxyN9AA51LTIJdc7X62ZkZ3r97gv6xH9OgWupCvqShBfponoOp5MihL9AzlnnhfgYVutDqoPwEus31p5Lqz_Yx_m70_v_Lokf6IMaNnwOYrMwyvlY_FJTp14-JN6ycuRlfuNtZ0IwbzysdBweYkvGAQ0uZhdqnrnSPrmemKqKywPYEdZj4wfTUMAhGljDpFUcP6H36aZgHHTCKmSesWBCMpMhfHo",
    about:
      "Urban Threads curates modern streetwear essentials with a focus on quality fabrics and limited-run drops.",
    stats: {
      totalSales: "12,450+",
      responseTime: "< 1 hour",
      joinDate: "Jun 2026",
      items: "428"
    },
    categories: [
      { name: "All Products", count: 428 },
      { name: "Outerwear", count: 142 },
      { name: "Footwear", count: 89 },
      { name: "Accessories", count: 115 },
      { name: "Essentials", count: 82 }
    ],
    productIds: [1, 2, 9, 15]
  },
  {
    id: 2,
    name: "Tech Haven",
    feedback: "Top Rated Seller",
    location: "Austin, TX",
    rating: 4.8,
    reviewCount: "860",
    bannerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSXtqsMv7BGWHtngugFhCy1nalBCQ-zhsMjG-07OacPkBBAmeHoQbhCT8aYH1laPxflVLmbZVwXeR04ptOwPs8caFEsk2yWBvN9kUw2QxU2G2GzXQYGDQ57zDcvPU_eDAr8kmjCwJbQpBYqT8xd43iI0EnYXK-lZyITibJB-a6ZAk4rfHhnT7axwPcQ9HXPB8Ka_9XN96dhxwii2Of-E5siL50mKD8cvwzq8v9a5xeqtXSYjnQyA2p3-BqzDM-Go2rY7zVb8E7lpw",
    logoImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoswkUkz5Nl_-KSjVylz-wTBIlXa82uGEhEz3gPql5aEahjCpMeKTAxvKjG5jE7jCQ_sWbWQy_fa7kLRLQ7vONVH44mvCPHjeR3YRrSY1jWTwUbr097lp8tHvEElRyI00HYfo15p8zo4m1P_vUHqFLKHlsmw-N2KsnQZZMMInHgybXZohn_CiXIR1LOnWsehBkg6dIt7U_A5H0cGUkE4gFAu-oXas8etXFQgTpWcgDxjKLvph1j9gL-FCKeEzO9dnOaTa-loTP4qo",
    about:
      "Tech Haven brings premium computing, audio, and creator gear to professionals who demand performance.",
    stats: {
      totalSales: "9,820+",
      responseTime: "< 2 hours",
      joinDate: "Aug 2026",
      items: "312"
    },
    categories: [
      { name: "All Products", count: 312 },
      { name: "Computing & Laptops", count: 120 },
      { name: "Audio & Headphones", count: 76 },
      { name: "Streaming Gear", count: 54 },
      { name: "Accessories", count: 62 }
    ],
    productIds: [5, 6, 7, 8, 10, 11, 13, 14, 16, 17]
  },
  {
    id: 3,
    name: "Green Life Home",
    feedback: "Eco-Friendly Badge",
    location: "Portland, OR",
    rating: 4.7,
    reviewCount: "640",
    bannerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnNsjiDsE0UnsTYLFW7GauNYIF95juQfUAURNwFVH762LJ_KSR--qSEo1XdRATuIGl1TIpoObRMGuJ01Z3_dIEeyMinqZ7ESBoPbu187SD4-3dSh9XrjtXzibr7wjL8NuBbAfgQD7ULfrQ2uCRLtSddH-0mDp5wEWY6Kzl2-LYenGSPSYK8NnTAD9hW9fQ7tkfK2NthMxgCTtWZv_m4GabvVeiejZAyfDDeeCc_637z82HHLuHUalXoJSoZTqf8KCxHS9Z62Z7Uu4",
    logoImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApSlYSwUXZE759UExQbt5j7bHkHJRs9ZaYsqcRgJXSpaWegcaNSADC09B457B7wnIyAk5hAsVO5hzGDhu1gEYNfIqm0-kbhDievb8qIBXoTfjdVJ5gK0IoTnEVeroBMDhmP3U-2jRrmJ1BUkD9UJ_20Jc-UeqarniV2tBc4mKSncpLCB9SvMoE0cma8n7MIfdf3kLQV2lVq3vQunS2VDokA6Y5slNbwxAx3eKHjL9FZyXMQH0fxRg3d4UailTL5QgQr-psksftl-k",
    about:
      "Green Life Home specializes in eco-friendly essentials for calm, sustainable living spaces.",
    stats: {
      totalSales: "7,430+",
      responseTime: "< 3 hours",
      joinDate: "Nov 2026",
      items: "198"
    },
    categories: [
      { name: "All Products", count: 198 },
      { name: "Home & Garden", count: 88 },
      { name: "Kitchen", count: 44 },
      { name: "Bath", count: 38 },
      { name: "Accessories", count: 28 }
    ],
    productIds: [4, 12, 3]
  }
];

export default SELLER_PROFILES;
