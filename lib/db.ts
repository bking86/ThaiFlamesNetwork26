
import { createPool } from '@vercel/postgres';

/**
 * Initialize a Postgres pool for data persistence.
 * This is used for storing member vetting history and reputation scores.
 */
export const db = createPool({
  connectionString: process.env.POSTGRES_URL,
});

/**
 * Example helper to fetch member reputation
 */
export async function getMemberReputation(memberId: string) {
  try {
    const { rows } = await db.query(
      'SELECT reputation_score FROM members WHERE id = $1',
      [memberId]
    );
    return rows[0]?.reputation_score || 85;
  } catch (error) {
    console.error('Database Error:', error);
    return 85; // Default safe score
  }
}
