/** Platform badges and streak achievements (gallery uses `image` paths under /public). */
const achievements = [
  {
    id: "codechef-problem-solver-bronze",
    name: "Problem Solver - Bronze Badge - CodeChef",
    platform: "CodeChef",
    description:
      "Recognized for solving a significant volume of competitive programming challenges and demonstrating proficiency in core logic.",
    image: "/achievements/Problem Solver - Bronze Badge - CodeChef.png",
    profileUrl: "https://www.codechef.com/users/h5c_1512",
  },
  {
    id: "codechef-daily-streak-bronze",
    name: "CodeChef Bronze",
    platform: "CodeChef",
    description:
      "Recognized with a Bronze 5-day coding-streak badge on CodeChef.",
    image: "/achievements/Bronze Streak Badge - CodeChef.png",
    profileUrl: "https://www.codechef.com/users/h5c_1512",
  },
  {
    id: "leetcode-100-days-2025",
    name: "Solving Problems 100+ days in 2025 - LeetCode",
    platform: "LeetCode",
    description:
      "Maintained a disciplined daily algorithm practice streak for more than 100 days in 2025.",
    image: "/achievements/Solving Problems 100+ days in 2025 - LeetCode.png",
    profileUrl: "https://leetcode.com/u/Vikranth_Kumar_Jakkoju/",
  },
  {
    id: "leetcode-50-days-2025",
    name: "Solving Problems 50+ days in 2025 - LeetCode",
    platform: "LeetCode",
    description:
      "Earned a 50+ day solving badge on LeetCode in 2025.",
    image: "/achievements/Solving Problems 50+ days in 2025 - LeetCode.png",
    profileUrl: "https://leetcode.com/u/Vikranth_Kumar_Jakkoju/",
  },
  {
    id: "leetcode-50-days-2026",
    name: "Solving Problems 50+ days in 2026 - LeetCode",
    platform: "LeetCode",
    description:
      "Continued consistent problem-solving on LeetCode into 2026 with a 50+ day badge.",
    image: "/achievements/Solving Problems 50+ days in 2026 - LeetCode.png",
    profileUrl: "https://leetcode.com/u/Vikranth_Kumar_Jakkoju/",
  },
  {
    id: "hackerrank-problem-solving-silver",
    name: "Problem Solving Silver level - HackerRank",
    platform: "HackerRank",
    description:
      "Attained Silver status for intermediate algorithms, data structures, and logical problem solving.",
    image: "",
    profileUrl: "https://www.hackerrank.com/profile/jakkojuvikranth",
  },
  {
    id: "hackerrank-cpp-bronze",
    name: "C++ Badge - HackerRank",
    platform: "HackerRank",
    description:
      "HackerRank language proficiency badge for C++.",
    image: "",
    profileUrl: "https://www.hackerrank.com/profile/jakkojuvikranth",
  },
  {
    id: "hackerrank-python-bronze",
    name: "Python Badge - HackerRank",
    platform: "HackerRank",
    description:
      "HackerRank language proficiency badge for Python.",
    image: "",
    profileUrl: "https://www.hackerrank.com/profile/jakkojuvikranth",
  },
];

/** Legacy shape for existing Achievements.jsx until Step 8. */
export const legacyAchievements = achievements.map((item) => ({
  name: item.name,
  platform: item.platform,
  description: item.description,
  location: item.image,
}));

export default achievements;
