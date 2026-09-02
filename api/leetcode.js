export default async function handler(req, res) {
  const query = `
    query getUserStats($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({ query, variables: { username: 'kronocodes' } }),
    });

    const { data } = await response.json();
    const solved = data.matchedUser.submitStats.acSubmissionNum;
    const total  = data.allQuestionsCount;

    const get = (arr, diff) => arr.find(d => d.difficulty === diff)?.count ?? 0;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.json({
      totalSolved:  get(solved, 'All'),
      easySolved:   get(solved, 'Easy'),
      mediumSolved: get(solved, 'Medium'),
      hardSolved:   get(solved, 'Hard'),
      totalEasy:    get(total,  'Easy'),
      totalMedium:  get(total,  'Medium'),
      totalHard:    get(total,  'Hard'),
    });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch LeetCode stats' });
  }
}
