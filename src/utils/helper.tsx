type Ratings = {
  [key: number]: number;
};

export function calculateAverageRating(
  ratings: Ratings,
  ratingCount: number
): number {
  let totalScore = 0;

  for (const star in ratings) totalScore += parseInt(star) * ratings[star];

  return ratingCount > 0 ? totalScore / ratingCount : 0;
}
