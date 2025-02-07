export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skPOcrebVTq5uvaCpvozKuOQy40bA44NMTUTmpJhRWBbBlAN1vxk2C58ZbDouMGqOsEMJjcsOIPVNd5YuNdukT78MrgcBkSKO0zFrDrihg57LmY8XlbOoX5zAUE5Djrw4LiiqFEjoAqn0ThmyvLs6aIhQAr6edYmiqminReubLwnReYcByjs"
  ,
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
