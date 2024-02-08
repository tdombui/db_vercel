import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset: 'production',
  projectId: '71yi71sa',
  useCdn: true,
  token: "skY37ugxdVNcyPt4Tblqzvy9s0ygsfgQsOovxk68OXAmO8ZQIvNK4oL9f1wdxRA7PZydnp9hOwSBd6XAIPUuiPzJaFQAU92tLBWtFBjnnHDuj5MydAae4fDVkiLq02xtXbyDdY4GO7DaiJrp1mXjmytTMFjaWK1YPIYhJEqNsYjcAXHYGncl"
})
